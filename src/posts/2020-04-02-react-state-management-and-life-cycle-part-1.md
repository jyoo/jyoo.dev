---
title: "React State Management And Life Cycle - Part 1"
date: "2020-04-02"
slug: "/posts/react-state-management-and-life-cycle-part-1"
author: "James"
excerpt: "Last time, when I was taking a technical interview and working on a take-home test, I encountered an issue related to state management and lifecycle of React."
tags: ["react", "programming"]
---

Last time, when I was taking a technical interview and working on a take-home test, I encountered an issue related to state management and lifecycle of React. This article is a summary of how we need to manage state in React, and life cycle in React.

-----
## Function and Class Components
- In React, we make a component using a function (like a function in Javascript) or a class. For example,

### Example
```
// A function component
function Hello(props) {
    return (
        <div>
            <h1>Q. How are you doing today?</h1>
            <h2>I am doing great :)</h2>
        </div>
    )
}
```

```
// A class component
class Hello extends React.component {
    render() {
       return (
            <div>
                <h1>Q. How are you doing today?</h1>
                <h2>I am doing great :)</h2>
            </div>
        ) 
    }
}
```

- There are some differences between a function and class component, but I will dicuss more about it another article.

-----
## Function Component
- Using a hook which is added in React 16.8, you can declare a variable for saving and updating state.

### Example
```
import React, {useState} from 'react';

const Result = (props) => {
    const [userID, setUserID] = useState(props.id);

    const handleButtonClick = () => {setUserID("")};

    return (
        <div>
            <h3>{userID}</h3>
            <button onClick={handleButtonClick}>Remove ID</button>
        </div>
    )
}
```

- In the above, `props` includes user `id`, and `props.id` is assigned to `userID`.
- `setUserID` is used to update the state of `userID`. Once a user click the button (i.e, Remove ID), `handleButtonClick` is executed, and an empty string is assigned to `userID`.

-----
## Class Component
### Example 

```
import React from 'react';

class Result extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            userID: props.id
        }
    }
    
    const handleButtonClick = () => {this.setState({userID: ""})};

    render() {
        return (
            <div>
                <h3>{userID}</h3>
                <button onClick={handleButtonClick}>Remove ID</button>
            </div>
        )
    }
}
```

- If we change the function component into the class component style, it will be looked like the above.
- However, two differences must be discussed
    - Instead of `const [userID, setUserID] = useState(props.id);`, `this.state` is used to store the state.
    - In order to update the value of `userID`, `this.setState({userID: ""});` is used in the function, `handleButtonClick`.

-----
## Function vs Class Components (Update)
- Function components use a hook to save and update a state
    - [In fact, a hook can only be used in a function component or from custom hooks](https://reactjs.org/docs/hooks-rules.html)
    - Class components use `this.state` and `this.setState({});` to update a state
- When a state is updated,
    - A hook will overwrite saved value inside of a state variable. For example, let's say we wrote the following:

### Example
    ```
    import React, {useState} from 'react';

    const Result = (props) => {
        const [user, setUserID] = useState({
            id: props.id,
            name: props.name
        });

        const handleButtonClick = () => setUserID({id: ""});

        return (
            <div>
                <h3>{userID}</h3>
                <button onClick={handleButtonClick}>Remove ID</button>
            </div>
        )
    }
    ```

- In this case, `user` will only have `id` property, and the property with `name` key will be removed.
- However, `this.setState({})` in class component will only modify applicable properties.
- Any data type can be assigned to a state variable in a function component
    - `this.state` in a class component is always an object.

-----
## Function vs Class Components (Update using a previous value)
### Example 1
    ```
    // Function component
    import React, {useState} from 'react';

    const Result = (props) => {
        const [count, setCount] = useState(123);

        const handleButtonClick = () => {setCount(count + 1)};
        
        // OR
        // const handleButtonClick = () => {setCount(prevState => prevState + 1)}

        return (
                <div>
                   <h3>{userID}</h3>
                    <button onClick={incrementCount}>Increment Count</button>
                </div>
        )
    }
    ```

    ```
    // Class component
    import React from 'react';

    class Result extends React.component {
        constructor(props) {
            super(props);
            this.state = {
                count: 123
            }
        }
    
        const handleButtonClick = () => {this.setState({count: this.state.count + 1})};

        render() {
            return (
                <div>
                    <h3>{userID}</h3>
                    <button onClick={incrementCount}>Increment Count</button>
                </div>
            )
        }
    }
    ```

- [We can also create a custom hook to update a state value in a function component.]("https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/")
### Example 2

    ```
    // Function component
    import React, {useState, useRef, useEffect} from 'react';

    function usePrevious(val) {
        const ref = useRef();

        useEffect(() => {
            ref.current = val;
        })

        return ref.current;
    }

    function Result(props) {

        const [clickCount, setClickCount] = useState(123);
        const prevClickCount = usePrevious(clickCount);

        const handleButtonClick = () => {setClickCount(prevClickCount + 1)};

        return (
            <div>
                <h3>{userID}</h3>
                <button onClick={incrementCount}>Increment Count</button>
            </div>
        )
    }
    ```

    ```
    import React from 'react';

    class Result extends React.component {
        constructor(props) {
            super(props);
            this.state = {
                count: 123
            }
        }
    
        const handleButtonClick = () => {this.setState((prevState, props) => {
            count: prevState.count++
        })};

        render() {
            return (
                <div>
                    <h3>{userID}</h3>
                    <button onClick={incrementCount}>Increment Count</button>
                </div>
            )
        }
    }
    ```

- The above examples are useful, but there is another use case as well. If a state has to be updated after certain seconds are passed, [this website would provide the best solution!](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
- If you use a class component, and a state has to be updated, we can use a built-in `setState` with parameters