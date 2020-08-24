---
title: "Restoring A Hacked Website"
date: "2020-06-05"
slug: "/posts/restoring-a-hacked-website"
author: "James"
excerpt: ""
tags: ["wordpress", "programming"]
---

A couple of weeks ago, I had a chance to restore one website that had been hacked by a hacker. Since I think it was a valuable experience experience to me, I wrote the below record in case. 

# Problem
- A Wordpress website had been hacked
- Once a user visited the website, they were redirected to website(s) the hacker(s) chose.
- I could not access wp-admin since I was redirected to another website right away.

# Derived Problems
- The website was supposed to be removed from or blacklisted by search engines.
    - Since the problem was found after a few days after the incident, it did not happen yet.

# Causes
- The address `js.digestcolect.com` was used for redirection 
    - In `header`, `js.digestcolect.com` was used for pingback
    - Near the end of `body`, I found that several scripts were added. The scripts did the follow:
        - Once a user visits the website, the script had been executed. They were redirected to some websites. (not `js.digestcolect.com`).
        - The hacker used Wordpress  `Elementor` plugin and ` Sydney` theme to achieve the above.
        - The plugin and theme had not been updated for a while.
 
# Solution - General
- Visited its hosting website right away
    - To check whether somebody tried to sign in its hosting account
    - It was not affected, so I changed its password first
- Changed passwords for 1) database and 2) FTP
    - After you change the database password, check the website again. 
    - Change the FTP password as well. In this case, failure to change the FTP allowed the attacker to implement sitemaps and a file to do Google Analytics verification.
- Did Curl on Terminal to see what caused such redirection.
    - Useful to know which part caused redirection.

# Solution - Database
- Accessed the database and checked all tables
    - `wp_options` are commonly used to achieve redirection. (In particular, the address)
    - Looked up `wp_statistics_visitor` to know 1) when and 2) how the attack was happened.

# Solution - Wordpress
- Checked the theme and plugin's files whether the attacker also changed the files.
    - Both `Sydney` theme and `Elementor` plugin had been manipulated.
    - The result of doing Curl was helpful. (because I found which parts caused the redirection problem)
- Found the scripts implemented in the files of the theme and plugin, and removed the parts
- Signed in Wordpress admin page
    - Install security-related plugins, if there isn't any
    - Update all themes and plugins
