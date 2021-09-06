---
title: "Deploying Go Application Using EC2 and CodeDeploy"
date: "2021-06-28"
slug: "/posts/deploying-go-application-using-ec2-and-codedeploy"
author: "James"
excerpt: "sort is a handy function to sort elements in a list. Using the function, we can order elements in a list in ascending or descending order. Depending on a language that we use, we might encounter unexpected results."
tags: ["javascript", "python"]
---

# IAM - Role
- The IAM role for CodeDeploy is used to interact with EC2 instance(s).
- The one for EC2 is used to read S3.
- You can find the detailed instruction here: ["Continuous Deployment with AWS CodeDeploy & Github"](https://hackernoon.com/continuous-deployment-with-aws-codedeploy-github-d1eb97550b82).

# EC2 - Launch
I usually prefer using the AWS console to configure and update AWS resources. The below instruction also assumes that a reader uses the AWS website to deply EC2 instance. When we try to launch an EC2 instance, we can enter User Data type so that the instance installs software without our intervention. The below script is useful to install code deploy for an instance with Ubuntu.

```
sudo apt update
sudo apt install -y ruby
cd /home/ubuntu
aws s3 cp s3://aws-codedeploy-us-west-1/latest/install .
chmod +x ./install
sudo ./install auto
```

If you are interested in a script for a Linux instance, you can find the relevant script in ["Continuous Deployment with AWS CodeDeploy & Github"](https://hackernoon.com/continuous-deployment-with-aws-codedeploy-github-d1eb97550b82).

Make sure to have `.pem` file so that you can access the deployed EC2 instance via CLI.

# EC2 - Setup
If the deployed EC2 instance is Linux, enter the following to install Go:
```
sudo yum update -y
sudo yum install -y golang
```
In ["Deploying a Go application on AWS EC2"](https://hackernoon.com/deploying-a-go-application-on-aws-ec2-76390c09c2c5), @mlabouardy discusses the environment variables (GOROOT, GOPATH and PATH), but it looks we do not need to do so anymore. To ensure that Go is properly installed, enter `go` in your command line and see a response.

If you chose ubuntu AMI for your instance, [enter the following on your CLI to install GO](https://github.com/golang/go/wiki/Ubuntu):
```
$ sudo add-apt-repository ppa:longsleep/golang-backports
$ sudo apt update
$ sudo apt install golang-go
```

# CORS
One of the reasons why I wanted to write about running Go app on EC2 is because I had difficulty in dealing with issues related to CORS. In my case, I installed [cors](https://github.com/rs/cors) so that my React app can interact with my Go application. When I run my React app on localhost, my app sent `POST` request to my Go application, and a response was received without any problem. However, when the app was deployed via [Vercel](https://vercel.com/dashboard) or [Netlify](https://www.netlify.com), it was not working. Some of my findings are below:
- Make sure that `OPTIONS` request is handled. It is likely that a request from a client triggers [CORS preflight](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests) becuase many requests are not ["simple requests"](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)
- It is possible to do a CORS quest from HTTPS domain to other HTTPS domains, [but not to HTTP domains because they are not secure.](https://stackoverflow.com/a/37068063/8089406)

https://www.google.com/search?client=safari&rls=en&q=Command+%27aws%27+not+found+on+ubuntu&ie=UTF-8&oe=UTF-8

https://hackernoon.com/continuous-deployment-with-aws-codedeploy-github-d1eb97550b82
