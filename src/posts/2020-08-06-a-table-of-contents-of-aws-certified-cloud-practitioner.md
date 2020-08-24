---
title: "A Table of Contents of AWS Certified Cloud Practitioner"
date: "2020-08-06"
slug: "/posts/a-table-of-contents-of-aws-certified-cloud-practitioner"
author: "James"
excerpt: "Taking an AWS certification exam is one way to validate your AWS skills. Even though the certification does not cover every single part of AWS services, it provides an opportunity to have a general understanding of the design, architecture and details of the AWS.
"
tags: ["aws", "cloud"]
---

Taking an AWS certification exam is one way to validate your AWS skills. Even though the certification does not cover every single part of AWS services, it provides an opportunity to have a general understanding of the design, architecture and details of the AWS.

Below is a table of contents of the AWS Certified Cloud Practitioner exam. Along with the table, the following websites are helpful to be prepared for the exam.

- [AWS Training & Certification](https://www.aws.training)
- [Architecting for the Cloud: AWS Best Practices](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)
- [Amazon Web Services (AWS) - Cloud Computing Services](https://aws.amazon.com)


# Introduction

## What is the AWS?
- Cloud computing service
- Cloud computing: On-demand delivery of IT resources and applications via the Internet

## Benefits
- Agility
    - Possible to pivot fast if needed
    - We can test often, patch quickly and respond to an incident efficiently
- Elasticity & Scalability
    - Scale down and up easily
        - Save cost when resources are overutilized
        - Deploy more instances and services to serve better when needed
    - Example: [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/)
- Reliability 
    - In general, "reliability" refers to the ability of a system to recover from service failures.
    - In cloud computing, it is about the capacity of using resources to meet service demand (so that service disruptions are mitigated)
    - Fault tolerance
        - If a system is "fault-tolerant", the system can continue operating in the event of components' partial failures
- Security
    - Will be discussed in another section

-----

# List of Services

## Compute
- EC2
- Lightsail
- Lambda
- Elastic Beanstalk

## Storage 
- S3
- S3 Glacier
- EFS
- Storage Gateway

## Databases
- RDS
- DynamoDB
- ElastiCache
- Amazon Redshift

## Network & Content Delivery
- VPC
- CloudFront
- Route 53
- API Gateway
- Direct Connect

## Developer Tools
- CodeBuild
- CodeCommit
- CodeDeploy
- CodeArtifact

## Management & Governance
- AWS Organizations
- CloudWatch
- AWS Auto Scaling
- CloudFormation
- CloudTrail
- Config
- Trusted Advisor

## Security, Identity & Compliance
- IAM
- Resource Access Manager
- Cognito
- Secrets Manager
- Amazon Macie
- Certificate Manager
- Artifact

## Application Integration
- Simple Notification Service
- Simple Queue Service

## Customer Engagement
- Amazon Connect

-----

# Architecture

## 5 Pillars
- Security
- Reliability
- Performance Efficiency
- Cost optimization
- Operational Excellence

## Security
- Ability to protect resources using risk assessment and mitigation strategy while delivering the added value for customers

### Core Concepts
- Detective controls
- Incident response
- Infrastructure protection
- Data protection
- Therefore, Detect, Respond and Protect

### Design Principles
- Security implementation
- Trace logs
- Apply the concept of the least privilege
- Automation

## Reliability

### Core Concepts
- Foundations
- Change management
- Failure management
- Therefore, Anticipate, Respond and Prevent

### Design Principles
- Stop guessing capacity
- Scale horizontally
- Implement automatic recovery processes
- Test the recovery procedures
- Automate any necessary changes

## Performance Efficiency

### Core Concepts
- The "right" tools / solutions
- Review them
- Monitor them

### Design Principles
- Consume the AWS instead of on-premises infrastructure
- Globally expand
- A serverless architecture
- Test-driven development

## Cost Optimization

### Core Conepts
- Expenditure awareness
- Optimize the cost by choosing cost-effective resources

### Design Principles
- Choose the right consumption model (on-demand, reserved and spot + dedicated)
- Efficiency measurement
- Expenditure analysis
- Managed services

## Operational Excellence
- Automation
- Respond to events efficiently
- Define and meet standards

-----

# Security

## Introduction
- Resilient infrastructure for high security without paying much
- Network security
    - Built-in firewalls
    - Encryption
    - Private or dedicated connection
    - DDoS mitigation
- Inventory and config management
    - Template definition and management tools
    - Inventory and config tools
    - Deployment tools
- Data encryption
    - Key management options
    - Hardware-based cryptographic key storage options
- Access control
    - IAM
    - MFA
    - Federated accounts
    - Amazon Cognito
    - AWS SSO
- Monitoring and Logging
    - AWS CloudTrail
    - Streamline investigation
    - Notification alert
- AWS Marketplace

## Shared Responsibility Model
- AWS's responsibility
    - Physical
    - Network
        - VPC, scalability, etc.
        - 3rd-party audit
    - Hypervisor (partially)
- Customer's responsibility
    - Hypervisor (partially)
    - Guest OS
    - Application
    - User data

- Improvement using technology
    - Supporting AWS services from IAM, logging, monitoring to encryption
- Compliance requirements
    - Benefits of using cloud-based governance

## IAM

### Authentication
- User (A permanent operator)
- Group: a collection of users
- Role (A temporary operator)
    - The Role is NOT about permission (= authorization)

### Authorization
- Policy docs
    - For specific or broad APIs
    - Explicit deny vs. Implicit deny
    - Using this concept, a security manager can simply detach any policy docs (i.e, permissions) from operators (user, group or role)
        - The above is possible, if a root user is protected, and not used 
- [Authentication vs Authorization](https://medium.com/datadriveninvestor/authentication-vs-authorization-716fea914d55)

## Amazon Inspector
- Assesses applications for vulnerabilities 
- Provide a detailed report with security findings and suggestions
- AWS does NOT guarantee that following the recommendation is always effective
    - It is a customer's responsibility
- Accessible using 1) the Console 2) SDK 3) API 4) CLI 

## AWS Shield
- A managed Distributed Denial of Service (DDoS) protection service
- Dos vs. DDoS

### Shield Tiers
- AWS Shield Standard (No charge)
    - Automatically protect any AWS resource and region
    - Automated mitigation techniques without latency impact
    - Self-service  
- AWS Shield Advance (24/7 DDoS response team + additional capacity to protect)
    - a.k.a DRT team
    - available to call them before, during, after any attacks
    - Application layer attack can be handled with additional capacity
    - Monitoring and counselling about relevant AWS services 
- Each Standard and Advanced tiers include different services for 1) Route 53 2) CloudFront or ELB and 3) Elastic IP address

## Compliance

### AWS
- Risk management
    - Identify risks
    - Assess internal/external risks
    - Implement appropriate measures
    - Maintain security policy
- Control environment
    - Includes policies, processes and control activities 
    - Integrates cloud-specific controls
- Information security
    - Designed to protect 1) confidentiality 2) integrity 3) availability
    - and publish security whitepapers

### Customers
- Need to review trusted info + documents for compliance requirements
- Design and implement control objectives
- Identify and document controls by 3rd party
- Check and review they are operating effectively

-----

# Pricing & Support

## Plans
- Pay-as-you-go
    - Flexible
    - No need to forecast future demand
- Reserved
    - Option 1: AURI (All Upfront)
    - Option 2: PURI (Partial upfront)
    - Option 3: NURI (No upfront)
    - Save up to 75%
- Spot
- Dedicated

## Examples

### EC2
- Cost factors
    - Instance config: physical capacity, OS, region, instance type and instance size
    - Plans: on-demand, reserved or spot
    - Others: number of instances, load balancing
- Consideration
    - Monitoring cost (by CloudWatch)
    - Autoscaling
    - Elastic IP addresses

### S3
- Cost factors
    - Number of requests, type of requests
    - Data transfers (out of the S3)

### EBS
- Volume types
    - General purpose (SSD)
    - Provisioned IOPS (SSD)
    - Magnetic
- Cost factors
    - Volumes (provisioned amount per month)
    - IOPS (Input-output per seconds)
    - Snapshots
    - Data transfers

### RDS
- Cost factors
    - Characteristics: database engine, size and memory class
    - Number of storages
    - Deployment type: single vs multiple AZ
    - Plans: on-demand or reserved
    - Provisioned storage: backup and terminated ones
    - Data transfers (outbound)

### CloudFront 
- Cost factors
    - Traffic distribution (across geographic regions)
    - Number of requests and their geolocation
    - Data transfers

## Support
- Basic
- Developer
- Business
- Enterprise