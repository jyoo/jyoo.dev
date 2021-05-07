---
title: "Deploying Code on GitHub and EC2 Using AWS CodeDeploy (2)"
date: "2021-05-01"
slug: "/posts/deploying-code-on-github-and-ec2-using-aws-codedeploy-2"
author: "James"
excerpt: "This is the second writing about deploying a Node.js app using CI/CD tools, AWS CodeDeploy and AWS CodePipeline."
tags: ["aws", "ec2", "github", "node"]
---

This is the second writing about deploying a Node.js app using CI/CD tools, AWS CodeDeploy and AWS CodePipeline. [The first article](/posts/deploying-code-on-github-and-ec2-using-aws-codedeploy) focuses on creating an EC2 instance and deploying a Node.js app in the instance using GitHub, CodeDeploy and CodePipeline. The below is about how to update codes and deploy them.

## Table of Contents
- Updating appspec.yml
- `npm` and `pm2` Not Found
- Final Comment

-----
## Updating appspec.yml
In the previous article, I used the following `appspec.yml` to upload my files to my EC2 instance:
```
version: 0.0
os: linux
files:
  - source: ./index.js
    destination: /home/ubuntu/your-app-name
  - source: ./package.json
    destination: /home/ubuntu/your-app-name
permissions:
  - object: /home/ubuntu
    owner: ubuntu
    group: ubuntu
    type:
      - directory
      - file
```

For my node.js app, I use `npm` and `pm2`. To automate the entire deployment process (e.g, `npm install` and `pm2 reload all`), we can use [hooks of CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html). The `npm install` and `pm2 reload install` can be run during the `AfterInstall` lifecycle. The updated `appspec.yml` would be:
```
version: 0.0
os: linux
files:
  - source: ./index.js
    destination: /home/ubuntu/your-app-name
  - source: ./package.json
    destination: /home/ubuntu/your-app-name
hooks:
  AfterInstall:
    - location: scripts/AfterInstall.sh
      timeout: 1000
permissions:
  - object: /home/ubuntu
    owner: ubuntu
    group: ubuntu
    type:
      - directory
      - file
```

In `scripts` directory, create and save `AfterInstall.sh`:
```
#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export HOME="/home/ubuntu/"
sudo PM2_HOME=/home/ubuntu/.pm2 pm2 list
cd /home/ubuntu/api
npm install
pm2 start /home/ubuntu/api/ecosystem.config.js
```

-----
## npm and pm2 Not Found
In `AfterInstall.sh`, if only the last three lines are included, it will not be working because it cannot find `npm` and `pm2`. [The `npm` issue can be solved by adding the following three lines](https://stackoverflow.com/questions/46048453/aws-codedeploy-command-not-found):
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads 
```

The above does not solve an issue related to `pm2`. For example, when you read the logs on CodeDeploy, your build would fail, and you are likely to see the following messages: 
```
[PM2][Initialization] Environment variable HOME (Linux) or HOMEPATH (Windows) are not set!
[PM2][Initialization] Defaulting to /etc/.pm2
```

It is because ["`pm2` needs to know your HOME path."](https://github.com/Unitech/pm2/issues/1818) By adding `export HOME="/home/ubuntu/"` in the `AfterInstall.sh`, that problem is solved.

-----
## Final Comment
In my case, none of the processes appeared in the `pm2` table (using `sudo pm2 status`) even though I followed the instructions. It was because my app was launched at a different `PM2_HOME` location. [By entering and saving `sudo PM2_HOME=/home/ubuntu/.pm2 pm2 list` in my `AfterInstall.sh, the process would appear in the status table.](https://github.com/Unitech/pm2/issues/992#issuecomment-254005976)
