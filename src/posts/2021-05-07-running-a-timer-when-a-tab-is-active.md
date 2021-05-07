---
title: "Running a Timer When a Tab Is Active"
date: "2021-05-07"
slug: "/posts/running-a-timer-when-a-tab-is-active"
author: "James"
excerpt: ""
tags: ["react"]
---

It should not be hard to send a request to an endpoint. From `fetch` to `axios`, there are many ways to achieve it. Using the `setInterval()` or `setTimeout()`, you can also send request(s) multiple times or after waiting for some time.

However, you might want to limit sending requests, if you are charged whenever you send a request. To get a response and update UI when a user actually sees your pages, the following a custom hook with the setInterval inside of `useEffect` might be helpful.

```
import React, { useState, useEffect } from "react";

/*
 * Check whether a page is visible to a user. 
 * Return true if it is visible to the user. Return false otherwise.
 */
function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(getIsDocumentHidden());
  const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

  useEffect(() => {
    const visibilityChange = getBrowserVisibilityProp();

    document.addEventListener(visibilityChange, onVisibilityChange, false);

    return () => {
      document.removeEventListener(visibilityChange, onVisibilityChange);
    };
  });

  return isVisible;
}

/*
 * Component1 is React function component
 * The value of isVisible is true when a user opens this tab. When the value is false and a user opens another tab
 * (i.e, not this tab), it is not executed.
 */
const Component1 = () => {
  const isVisible = usePageVisibility();
  
  useEffect(() => {
    let timerId = setInterval(async () => {

      if (!isVisible) clearInterval(timerId);
      let res = await axios.get(
        `https://api.something.com/path`
      );
      
      // Update some states, if needed
      // Send a request every 1000ms
    }, 1000);

    return () => clearInterval(timerId);    
  }, [isVisible]);
  
  // ...
  return (
    <>
      <div /> 
    </>
  );
  
}

```
[GitHub Gist is here](https://gist.github.com/jyoo/3ede2aae60490354a91aab60eba49c93)

### References
[Harnessing the Page Visibility API with React](https://blog.sethcorker.com/harnessing-the-page-visibility-api-with-react)

[Stop setInterval call in JavaScript](https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript)

[Detecting focus of a browser window](https://www.codingwithjesse.com/blog/detect-browser-window-focus/)

[React hooks - right way to clear timeouts and intervals](https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals)