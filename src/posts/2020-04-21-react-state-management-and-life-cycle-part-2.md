---
title: "React State Management And Life Cycle - Part 2"
date: "2020-04-21"
slug: "/posts/react-state-management-and-life-cycle-part-2"
author: "James"
excerpt: "This is a part 2 of React State Management And Life Cycle series."
tags: ["react", "programming"]
---

This is a part 2 of React State Management And Life Cycle series. If you are interested more in:
- Initialization of state in a function and class component
- Update a state in a component
- Function component vs. class component

Please check the [Part 1](/react-state-management-and-life-cycle-part-1) as well.

-----
## Lifting Up a State
- Suppose that there is a parent and child component. When it is necessary to share a state between components, we often use ["lifting up a state"](https://reactjs.org/docs/lifting-state-up.html)

### Example
```
// Function component 
import React, {useState} from 'react';

const ParentComponent = () => {

    let [greetings, setGreetings] = useState("Hello. How are you?");

    return (
        <div>
            <ChildComponent greetings={greetings} setGreetings={setGreetings} />
        </div>
    )
}

const ChildComponent = ({greetings, setGreetings}) => {

    const changeGreetings = () => {
        setGreetings("How can I help you today?");
    }

    return (
        <>
            <h1>{greetings}</h1>
            <button onClick={changeGreetings}>I am good. Thanks for asking.</button>
        </>
    )
}

// Class component

import React from 'react';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings: "Hello. How are you?",
    };
  }

  setGreetings = () => {
    this.setState({
      greetings: "How can I help you today?",
    });
  };

  render() {
    return (
      <div>
        <ChildComponent greetings={this.state.greetings} setGreetings={this.setGreetings} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.greetings}</h1>
        <button onClick={this.props.setGreetings}>
          I am good. Thanks for asking.
        </button>
      </>
    );
  }
}
```
- The above example shows how you can lift up a state in function and class components.
- Once a user clicks a button rendered by `ChildComponent`, `setGreetings` in `ParentComponent` is executed.
    - Note that in the `ParentComponent`, `greetings` and `setGreetings` are included as attributes in the tag so that it can be called in `ChildComponent`.
    - Also, a name of attribute can be different from a variable name. For example, I used  `<ChildComponent greetings={this.state.greetings} setGreetings={this.setGreetings} />`, but you can also say like `<ChildComponent hello={this.state.greetings} setHello={this.setGreetings} />`.
      - In this case, you need to use `hello` and `setHello` in the `ChildComponent`.

-----
## State Management between Siblings
```
// Class component
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Nobody clicked a button",
      componentType: ""
    };
  }


  const setMessage = (componentType) => {
    let message = (componentType === "Child1") ? 
                    "A button in Child1 has been pushed" :
                    "A button in Child2 has been pushed"
    this.setState({ message: message, componentType: componentType });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Child1Component
          componentType={this.state.componentType}
          setMessage={this.setMessage}
        />
        <Child2Component
          componentType={this.state.componentType}
          setMessage={this.setMessage}
        />
      </div>
    );
  }
}

class Child1Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let expression =
      this.props.componentType === "Child1" ? 
      "Yay I was faster" : 
      (this.props.componentType === "") ? "I will win!" : "Noooo";

    return (
      <>
        <h3>{expression}</h3>
        <button onClick={() => this.props.setMessage("Child1")}>
          Child 1 button
        </button>
      </>
    );
  }
}

class Child2Component extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    let expression = 
      this.props.componentType === "Child2"
        ? "Hahaha I won"
        : (this.props.componentType === "") ? "Let's see" : "How could you do that?";

    return (
      <>
        <h3>{expression}</h3>
        <button onClick={() => this.props.setMessage("Child2")}>
          Child 2 button
        </button>
      </>
    );
  }
}
```
- In total, there are three components: `ParentComponent`, `Child1Component` and `Child2Component`.
- In `ParentComponent`, the values of states are saved, and a function that updates a value of each state is implemented as well.
- Once a button in `Child1Component` or `Child2Component` pressed, `setMessage` function is called. 
  - Note that `setMessage` is inherited to `Child1Component` and `Child2Component` as a prop. Therefore, it is possible to call `setMessage` in the children components
  - To check which button in which class is pressed, there is a state, `componentType`.
    - The default is `""` when it is initialized.
  - A state of `componentType` is also inherited to the children components so that each component use its value to change what they rendered

```
