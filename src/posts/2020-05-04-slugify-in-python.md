---
title: "Slugify In Python"
date: "2020-05-04"
slug: "/posts/slugify-in-python"
author: "James"
excerpt: "Creating and using the right slug is important. Search engines often check a website's slug when they index pages, and it directly affects the overall performance of SEO."
tags: ["python", "programming"]
---

Creating and using the right slug is important. Search engines often check a website's slug when they index pages, and it directly affects the overall performance of SEO.

When I made additional pages for [Averagenie](https://www.averagenie.com), I was looking for a way to generate a slug, and found [this awesome article by Matthias Hagemann](https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1). His function is quite useful for my JS files, but I also needed it in Python. 

Today, I would like to share with anyone who needs to generate a slug for their Python apps.

# Codes 
```
def slugify(self, words):
        # https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
        a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        p = "|".join(list(a))
        
        regex = re.compile(p)
        slugified_words = words.lower()

        maps = [
            (r'\s+', '-'),
            (r'{}'.format(p), lambda c: b[a.find(c.group(0))]),
            (r'&', '-and-'),
            (r'[^\w\-]+', ''),
            (r'\-\-+', '-'),
            (r'^-+', ''),
            (r'-+$/', '')
        ]

        for old, new in maps:
            slugified_words = re.sub(old, new, slugified_words)
        return slugified_words
```

## NOTE:
- Mr. Hagemann also posted a public gist [here](https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1)
- My public gist is available [here](https://gist.github.com/jyoo/3c241909ad7921f28c7a0fc567377cd0)