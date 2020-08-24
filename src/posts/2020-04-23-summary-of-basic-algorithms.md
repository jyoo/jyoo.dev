---
title: "Summary of Basic Sorting Algorithms"
date: "2020-04-23"
slug: "/posts/summary-of-basic-sorting-algorithms"
author: "James"
excerpt: "Understanding algorithms and knowing how to use them is the key in computer science and software engineering. While we know the importance of learning algorithms, many people (including me) have a hard time doing it, and they often give up in the middle of learning."
tags: ["algorithm", "algorithm-ds"]
---

Understanding algorithms and knowing how to use them is the key in computer science and software engineering. While we know the importance of learning algorithms, many people (including me) have a hard time doing it, and they often give up in the middle of learning.

When we google algorithms and data structures, I see many excellent articles and writings, but they are somewhat burdensome at first to read from the beginning to the end. That's why I created this writing. In this writing, I write a summary of basic sorting algorithms: 1) Selection sort 2) Bubble sort and 3) Insertion sort so that anyone who does not have any or limited knowledge of algorithms can easily start.

-----
# Algorithm
- A set of instructions 
    - In particular, it is about: 
        - What a program needs to do, and
        - How the program has to solve
- The two important keywords for the computers: "efficiency" and "tradeoffs".
    - To measure how efficient it is and know what we gain and lose, "Big O notation is used"
- Big O notation is about:
    - How much time it needs (the time complexity of an algorithm)
    - How much memory it needs (the space complexity of an algorithm)
    - NOTE: By using Big O notation, we ignore external factors because it is hard to tell.
        - For example, the speed of a processor

# Big O
- O(1)
    - "Constant time"
    - Regardless of a size of inputs `n`, a O(1) function always takes constant time.
- O(logn)
- O(n)
    - "Linear time"
    - As a size of inputs grows, the complexity grows linearly as well.
- O(n logn)
- O(n^k)
    - When `k = 2`, we say it grows quadratically
- O(k^n)

-----
# Sorting Algorithm

## Definition
- Sorting is an organizing a set of items in a collection by some properties

## Goal
- Making it easier to search, retrieve and read data

## Criteria
- Time complexity
- Space complexity (memory usage)
    1. In-place algorithm: sort the existing dataset (= a risky operation)
    2. Out-of-place algorithm: making new copy and sort it
- Stability
    - An algorithm is stable when the "relative order" of the elements is kept.
    - For example, say that there is [1, 1, 3, 2, 4]
    - If the first 1 and second 1 does not change their order, it is stable
- Internal vs. External
    - It is internal if applicable data can be kept in main memory
- Recursive vs. Non-recursive
- Comparison vs. Non-comparison
    - There exists a comparison if a comparator is used to compare two items

### NOTE
- We can sort in increasing (i.e, non-decreasing) or decreasing order (by a property)
- Items in a given dataset must be homogeneous (i.e, a comparison between numbers or between strings)

-----
# Selection Sort

## Definition
- A selection sort algorithm is an algorithm that finds the smallest item and put it in a sorted list.

## Pros
- Good to use if it is for a very small dataset
- Easy to implement

## Cons
- Not efficient (Time complexity: O(n^2)) 

## How to
1. Compare a value of first item with values of rest of the items (i.e, from second to the end)
2. If there is an item with a smaller value compare with the first item, switch their position
3. Keep the very first item, and do comparison between the second item and the rest of items.
4. Switch the position of second item and an item with smaller value (than the second one), if applicable
5. Stops after the last element

## Code
```
// JS
function selectionSort(items) {

    // NOTE: If shallow copy is satisfactory
    let clonedItems = items.slice();
    let length = clonedItems.length;
    

    for (let i = 0; i < length; i++) {

        let selectedItemIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (clonedItems[i] > clonedItems[j]) selectedItemIndex = j;
        }

        if (selectedItemIndex != i) {
            let temp = clonedItems[i];

            clonedItems[i] = clonedItems[selectedItemIndex];
            clonedItems[selectedItemIndex] = temp;
        }
    }

    return clonedItems
}
```

```
// TS

// Java

// Python
```


-----
# Bubble Sort

-----
# Insertion Sort