---
title: "Sort function in JavaScript and Python"
date: "2021-06-01"
slug: "/posts/sort-function-in-javascript-and-python"
author: "James"
excerpt: "sort is a handy function to sort elements in a list. Using the function, we can order elements in a list in ascending or descending order. Depending on a language that we use, we might encounter unexpected results."
tags: ["javascript", "python"]
---

`sort()` is a handy function to sort elements in a list. Using the function, we can order elements in a list in ascending or descending order. Depending on a language that we use, however, we might encounter unexpected results. In this article, I compare the result of JavaScript and Python's `sort()` and discuss a few concepts.

## Comparison between JavaScript and Python
Let's begin with a small list that contains negative and positive numbers. And, see results of `sort` functions.

```
let arr = [-1, -10, -2, 3, 4, 5];
arr.sort();

console.log(arr); // [-1, -10, -2, 3, 4, 5]
```

```
arr = [-1, -10, -2, 3, 4, 5];
arr.sort()
print(arr) // [-10, -2, -1, 3, 4, 5]
```
Why are they different?

## JavaScript: Lexicographical order
When you call `sort` function for your array in JavaScript, you can choose one of three different types to sort your array

- Functionless
- Arrow function
- Custom function for comparison (more info is [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort))

If you do not implement any function for your `sort` function, your array is sorted alphabetically (or in lexicographical order). That is, each element in the array is converted into string type for comparison, and then sorted.

For example, in the above example, `-1, -10, -2, 3, 4, 5` are converted to `"-1", "-10", "-2", "3", "4", "5"` for sorting. Because the ASCII value of '-' is lower than any number like '3', negative numbers are placed at the beginning of the array. Likewise, since the value of '1' in ASCII is lower than '2', '-1' and '-10' are first then '-2'.

## Python: Numerical order / Lexicographical order
On the other hand, if all elements in a Python list are numbers, you can just use `sort()`. In this case, without any further implementation, all negative and positive numbers are sorted.

If all elements in a Python list are strings, `sort()` allow us to sort strings lexicographically. For example, let's say we have `['a', 'b', 'd', 'e', 'c']`. If we call `['a', 'b', 'd', 'e', 'c'].sort()`, the result would be `['a', 'b', 'c', 'd', 'e']`

## How to Order Numbers in JavaScript
To order numbers in an array in ascending or descending (i.e non-ascending) order, you need to provide function inside `sort` as an argument:

```
// Using a function
let arr = [-1, -10, -2, 3, 4, 5];
arr.sort(function (a, b) {
  return a - b;
});

// Using an arrow function
let arr = [-1, -10, -2, 3, 4, 5];
arr.sort((a, b) => a - b);

console.log(arr); // [-10, -2, -1, 3, 4, 5]
```

Note that `a - b` is needed to sort in ascending order. To be more accurate, the following code can be used as well instead `a - b`:

```
arr.sort(function(a , b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(arr); // [-10, -2, -1, 3, 4, 5]
```

This example shows how we can sort them in ascending order: 

- If a is bigger than b, it should return a positive value 
- If a is smaller than b, it should return a negative value
- Otherwise (i.e, if a = b), then we should return 0 so that nothing is changed.

Likewise, if you need descending order, the following implementation can be used:

```
// Using a function
let arr = [-1, -10, -2, 3, 4, 5];
arr.sort(function (a, b) {
  return b - a;
});

// Using an arrow function
let arr = [-1, -10, -2, 3, 4, 5];
arr.sort((a, b) => b - a);

arr.sort(function(a , b) {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});

console.log(arr); // [5, 4, 3, -1, -2, -10]
```

### References
[How to sort an array numerically in JavaScript](https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958)

[Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

[JavaScript Array sort: Sorting Array Elements](https://www.javascripttutorial.net/javascript-array-sort/)
