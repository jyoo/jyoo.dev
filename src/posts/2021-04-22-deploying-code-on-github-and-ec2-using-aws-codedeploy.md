---
title: "Deploying Code on GitHub and EC2 Using AWS CodeDeploy"
date: "2021-04-22"
slug: "/posts/deploying-code-on-github-and-ec2-using-aws-codedeploy"
author: "James"
excerpt: ""
tags: ["aws", "ec2", "github", "node"]
---

Easy deployment using CI / CD tools helps developers and engineers focus on developing and testing their software. Tools like GitHub Actions have become quite popular, and Amazon also has developed and maintained relevant tools for AWS customers.

Using AWS CodeDeploy and CodePipeline, and GitHub, you can push your code to your GitHub repo and automatically deploy that to EC2 instances. This article includes a few references that I have used and some notes.

## Table of Contents
- Deploying Node.js app on EC2
- Configuring CodeDeploy agent on an EC2 instance
- Setting up CodeDeploy and CodePipeline (with S3)

----- 
## Deploying Node.js app on EC2
* [Tutorial: Creating and managing a Node.js server on AWS, part 1 by
@bobtodski
](https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171)
* As of April 2021, Ubuntu Server 18.04 and Ubuntu Server 20.04 are available. It is possible to use any of them, 20.04 might not be stable to use because you are likely to encounter an error when you install `codedeploy-agent`
  * [Installation broken on Ubuntu 20.04](https://github.com/aws/aws-codedeploy-agent/issues/239)
  * [Ubuntu 20.04 Codedeploy v1.1.2](https://github.com/aws/aws-codedeploy-agent/issues/264)
  * [Install the CodeDeploy agent for Ubuntu Server](https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html)

----- 
## Configuring CodeDeploy agent on an EC2 instance
* After installing `node`, `nvm`, and others, you need to install `codedeploy-agent` to create the pipeline.
  * Please note about the version issue mentioned above if you are using ubuntu.

----- 
## Creating GitHub Repo
* In the repo, you should include appspec.yml:
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
-----
## Setting up CodeDeploy and CodePipeline (with S3)
* To avoid permission errors, you need TWO different IAM roles. One is for CodeDeploy, and the other is for an EC2 instance.
  * [Create CI/CD with Github Actions + AWS EC2, CodeDeploy and S3](https://medium.com/codemonday/github-actions-for-ci-cd-with-ec2-codedeploy-and-s3-e93e75bf1ce0)
* Also, if you launched your EC2 instance before setting up the IAM role for the instance, you should attach the role to the instance.
  * [Note that you have to reboot your instance so that the IAM role can be attached to the instance](https://stackoverflow.com/a/60815159/8089406)
* When we need to connect to GitHub for CodePipeline, you can choose GitHub version 1 or GitHub version 2
  * ["The GitHub version 2 action uses Github app-based auth backed by a CodeStarSourceConnection for Bitbucket, GitHub, and GitHub Enterprise Server actions resource."](https://docs.aws.amazon.com/codepipeline/latest/userguide/update-github-action-connections.html)

