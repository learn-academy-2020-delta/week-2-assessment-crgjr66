# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer: super() is used to gain access to functions in a parent class

  Researched answer: By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.



2. What is the DOM? What is the virtual DOM?

  Your answer: Document Object Model, and virtual DOM sits somewhere between our code and the real DOM, but I'm not really confident what they are

  Researched answer: The DOM is a W3C (World Wide Web Consortium) standard. The DOM defines a standard for accessing documents: "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
  The DOM is a W3C (World Wide Web Consortium) standard.

  The DOM defines a standard for accessing documents:

  "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

  The W3C DOM standard is separated into 3 different parts:

  Core DOM - standard model for all document types
  XML DOM - standard model for XML documents
  HTML DOM - standard model for HTML documents



3. What is a higher-order function?

  Your answer: They are functions that take other functions as arguments.

  Researched answer: Higher-order functions are functions that take other functions as arguments or return functions as their results. Taking an other function as an argument is often referred as a callback function, because it is called back by the higher-order function. The term comes from mathematics, where the distinction between functions and other values is taken more seriously. Higher-order functions allow us to abstract over actions, not just values.



4. What is JSX?

  Your answer: Javascript XML, allowing us to write HTML in our Javascript.

  Researched answer: JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. JSX is a preprocessor step that adds XML syntax to JavaScript. Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression.



5. What is React?

  Your answer: React is a Javascript library and is component based; created by Facebook.

  Researched answer: A JavaScript library for building user interfaces. React makes it painless to create interactive UIs, Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple



6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer: Yarn is a javascript package manager that automates, installs, updates, and configures software packages from a global registry.  I don't exactly know what files are updated when you run '$ yarn'.

  Researched answer: Yarn was developed by Facebook in attempt to resolve some of npm's shortcomings. Yarn isn't technically a replacement for npm since it relies on modules from the npm registry. Yarn is a new installer that still relies upon the same npm structure. The registry itself hasn't changed, but the installation method is different. Since Yarn gives you access to the same packages as npm, moving from npm to Yarn doesn't require you to make any changes to your workflow.  Yarn uses a lock file to track dependencies and file versions.



7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer: It is Port 3000 on 'this' computer.  It is used as a server to output our HTML and Javascript React projects, allowing us to see our output and debug our code as we are developing.

  Researched answer: Localhost is the IPv4 loopback IP address 127.0. 0.1 . It is used instead of the hostname of a computer. Localhost can sometimes mean this computer. For example, directing a web browser installed on a system running an HTTP server to http://localhost will display the home page of the local website. localhost is a network address that points to your own computer. Navigating to localhost:3000 in your web browser sends a request to the Rails development server running locally on port 3000. However, this only works if your web browser is running on the same computer as the development server.



8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer: A javascript iterable is an object that can be traversed, or 'iterated' over.  Strings and arrays are examples of javascript iterables.  This is useful because it means we have access to individual elements of these items and they can be accessed via an index.

  Researched answer: Iterable objects is a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop. Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable. An iterable object is any object that returns a function that produces an Iterator for its Symbol. ... You can loop over all values in an iterable object by using a for (var value of iterable) { } loop.



9. STRETCH: What is hoisting in JavaScript?

  Your answer: I don't know

  Researched answer: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



10. STRETCH: What are closures in JavaScript?

  Your answer: I don't know

  Researched answer: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React state - an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state. State is a JavaScript object that stores a component's dynamic data and determines the component's behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive. State can only be used within a class component.

- React props - “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child) Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

- React lifecycle methods - React lifecycle methods are the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events.
Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component
The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React. As the name suggests it handles the rendering of your component to the UI. It happens during the mounting and updating of your component.

- API - a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service. Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

- e.preventDefault() - The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.

- DOM events - DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model.
