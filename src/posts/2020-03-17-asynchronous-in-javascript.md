---
title: "Asynchronous in Javascript"
date: "2020-03-17"
slug: "/posts/asynchronous-in-javascript"
author: "James"
excerpt: "Javascript is a single-threaded, and all codes are executed in a sequence, not in a parallel fashion. In other words, unlike other languages such as Java, there is only one thread in Javascript, and it can be blocked by an expensive operation."
tags: ["javascript", "programming"]
---

## Prerequisite
Javascript is a single-threaded, and all codes are executed in a sequence, not in a parallel fashion. In other words, unlike other languages such as Java, there is only one thread in Javascript, and it can be blocked by an expensive operation. (For example, when you call API to retrieve data or CRUD operations, it takes time). To overcome this situation, the concept of asynchronous is useful and must be used.

## Description
Asynchronous methods are handy as we do not wait for an operation to be completed before going forward. Once it is finished, the result will be returned and codes can be executed based on the response. In Javascript, we can use `callback`, `Promise` and/or `async / await` to do asynchronous operations.

- Note: Asynchronous implies executing one line, but not waiting for it to be returned. It is not equivalent to [Concurrency](https://web.mit.edu/6.005/www/fa14/classes/17-concurrency/) or [Parallelism](https://www.geeksforgeeks.org/introduction-to-parallel-computing/)



--------
## Callback
### Description
Callback is the beginning point of an asynchronous operation in Javascript. In brief, developers and engineers implement callback in a function so that it can be called once a time-consuming operation is finished. 

### Example 1
In the first example, `alert` will be executed, and further operation will be done in the `second` function.
```
function first(callback) {
    alert("Hi there. How are you doing today?");
    callback();
}

function second() {
    alert("I am doing great. How about you?");
}

first(second);
``` 
Note that `second` in `first(second)` is not followed by parenthesis.

### Example 2
In the second example, assume that we called an API. Based on the result, we will pass it to the next function.

```
function first(callback) {
    callApi(..., function(names) {
        let firstName = names.split(" ")[0];
        let lastName = names.split(" ")[1];
        callback(firstName, lastName);
    })
}

function second(firstName, lastName) {
    alert("Hello, firstName + " " + lastName);
}
```
Nested callbacks are possible, but it is hard to read.

### Callback hell
Therefore, we say it is a callback hell. To solve this, `Promise` or `async / await` can be used.
```
city.getWardList(cityName, function(ward, err) {
    if (err) console.log(err);
    else {
        wards.forEach(function(ward, index) {
            ward.getSchoolIds(ids, function(res, err) {
                ids.forEach(function(id, index) {
                    schoolList.getSchoolNameById(id, function(name) {
                        ...
                    })
                }))
            })
        }) 
    }
})
```

--------
## Promise
### Description
Another method for asynchronous operation is a `Promise`. It returns another a state of `Promise` (pending, fulfilled or rejected) in a synchronous fashion, and it supplies the final (return) value when available. Let's see more through examples.
- NOTE: `Promise` is not working on Internet Explorer

### Example 1
The below example is based on [MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

```
const promise1 = new Promise(function(resolve, reject) {
    resolve('Success!');
});

promise1.then(function(value) {
    console.log(value); // "Success!"
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'It is resolved now');
});

promise2.then(result => {
    alert(result);
});
```
`promise1` shows how `Promise` resolves an object (in this case, String), and shows a result via `console.log`. `promise2` is almost the same as `promise1`, arrow functions are used for a reference. After 3 seconds, it is resolved, putting a parameter, 'It is resolved now' in the function.

### Example 2
Example 2 focuses on Promise chaining.
```
const powerOfTwo = number => {
    
    return Promise.resolve(2 * number);
}

Promise.resolve(0).then(powerOfTwo) // 1 
                  .then(powerOfTwo) // 2
                  ...               // 4
                  .catch(error => alert(error))
                  .finally(result => {
                      console.log(result);
                  })
```
`powerOfTwo` is a function for nth power of 2. The important parts are `then`, `catch` and `finally`. `then` is used to receive a return value, and `catch` is called when there is an error. Two ways to use `catch` inside a `promise` are suggested.

- Inside of promise, throw `Error`. For example,
```
new Promise((resolve, reject) => {
    throw new Error("Encountered an error");
}));
```
- OR, `reject` it
```
new Promise((resolve, reject) => {
    reject(new Error("Encountered an error"));
}) 
```

Last but not least, `finally` can be used so that some actions must be taken whether all code is executed with or without a problem.

### Promise.all
One of the strengths in using Promise is that we can do multiple asynchronous operations in a parallel manner (please check the note as well). This also implies that we can easily identify and solve a problem when any of the `Promise` is failed.
```
const promise1 = updateUserProfile(userID, options);
const promise2 = updateDocument(userID, options);

Promise.all([promise1, promise2]).then(values => {
    console.log(values);
})
```

### NOTE
- Until I wrote this, I thought Promise.all always run things in parallel. [It was so surprising to know that it is not guaranteed, even though a single-core CPU is not popular anymore.](https://anotherdev.xyz/promise-all-runs-in-parallel/)

--------

## Async & Await
### Description
The final method I will introduce is Async & Await. While each developer and engineer chooses a different method depending on their preference and circumstance they encounter, I prefer using Async & Await as it is more straightforward.

### Example 1
```
async function hello() {
    let result = await fetch("........");
    let user = await result.json();
}

async function world() {
    return "hello world";
}
```
As you see from the above, `async` is mandatory if you need to use `await` for an asynchronous operation. However, `async` does not always need `await`. 

### Example 2
```
const example = async () => {
    let promiseVariable = new Promise((resolve, reject) => {
        resolve("hi there");
    });

    let result = await promiseVariable;
}
```

### Example 3
```
const asyncFunction = async () => {
    const docs = await getDocuments();
    const newValue = "...";

    Promise.all(
        docs.map(async doc => {
            const serverTime = await getServerTime();
            
            const result = await updateDoc(doc, newValue, serverTime);
        })
    )
}
```
Through example 2 and example 3, we can find that `Promise.all` with `async` and `await` can be used together, and it is quite useful to do multiple asynchronous operation clearly and efficiently.
