---
title: "cannot create temp file for here-document: No space left on device"
date: "2021-05-21"
slug: "/posts/cannot-create-temp-file-for-here-document-no-space-left-on-device"
author: "James"
excerpt: "My instance runs cron jobs almost every minute to support jasan.io, and it is likely that the main cause is related to mail that has been created after finishing cron job."
tags: ["aws", "ec2", "cron"]
---

When I accessed one of my EC2 instances, I found this sentence on my terminal:
```
cannot create temp file for here-document: No space left on device
```

This did not stop my instance working, but this might bother you (like me) 😒 To solve a problem, we need to find its main cause. In my case, my instance runs cron jobs almost every minute to support [jasan.io](https://www.jasan.io), and it is likely that its origin is related to mail that has been created after finishing cron job.

First of all, check the size of directories and files in the instance by entering
```
sudo du -x / | sort -n | tail -40
```
If it does not give clear information, enter
```
sudo find / -type f -printf '%12s %p\n' 2>/dev/null|awk '{if($1>999999999)print $0;}'
```

If the memory was running out because of mails, it is likely that you would see a very big number like the below:
```
140737477885952 /proc/kcore
  5466297384 /var/spool/mail/ec2-user
```

Since mails were stored in `/var/spool/mail/ec2-user`, delete mails by entering the following command:
```
cat /dev/null > /var/spool/mail/ec2-user
```

### References
[Does /var/spool/mail/user ever get cleared?](https://serverfault.com/questions/346281/does-var-spool-mail-user-ever-get-cleared)

[xvda1 is 100% full, What is it? how to fix?](https://serverfault.com/questions/330532/xvda1-is-100-full-what-is-it-how-to-fix)

[Tab completion errors: bash: cannot create temp file for here-document: No space left on device](https://unix.stackexchange.com/questions/277387/tab-completion-errors-bash-cannot-create-temp-file-for-here-document-no-space)

[Delete cron mails](https://therandombits.com/2009/11/delete-cron-mails/)