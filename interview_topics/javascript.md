## Event Delegation (review)

- If you attach an event listener to a DOM element, it's also attached to all of its children (because they will bubble to it when clicked, or sooner if the listener is set to react to event capturing)
- currentTarget: has the eventListner (the parent)
    - target: was the pixel that was clicked
- Strategy: attach eventListeners only to a common ancestor
    - Good for using a similar handler on many cousin elements, when you want them all to react in the same way
- Never use specific eventLister methods on the document
    - Always document.addEventListener, not document.onclick
        - New handlers will overwrite old ones
- Saves memory, less code, more elegant DOM modifications
- _not_ more performant in a runtime sense, because the browsers is in constant contact with the OS anyways

## This keyword (review)

- Understanding the context of this can be very complicated at times 
- The value of this will be determined by the function's execution context, unless the function is bound to some other context 
- The order of binding: 
    - Constructor: Generation of a this with a 'new' keyword, invoking a constructor that produces the this
    - Explicit: Generation of a this with a call to .bind() in some previous context 
    - Implicit: When a function is called within a context, it implicitly receives the this that encapsulates that context (a function, an object, etc.)
    - Default: the global object or window is this 
        - Default binding also happens when a function is invoked within a function, without explicit binding, within the context of the inner function
    - Lexical this: this of the surrounding scope when an arrow function is created, offering explicit binding without .bind()
        - That is, they are statically bound to their declared context by default
-JS typically uses _dynamic_ binding (hence all of these rules) but it can have _static_ (a.k.a. lexical) binding in the presence of a closure, arrow function or .bind() call

### 'new' Keyword (review)

- Creates a new object, sets the object's prototype to the prototype of the constructor function 
- Executes the constructor function with 'this' as the newly created object
- Returns the created object, along with the return value of the constructor and its accompanying key-value pairs for use 

### Prototype and Inheritance (review)

- Each object has a prototype object, from which it inherits in all of its prototype's properties 
- '__proto__' is a non-standard mechanism for retrieving the prototuype of an object
- All normal objects also inherit a .constructor property that points to a constructor function for the object
- The '__proto__' property links that object to the .prototype property of he constructor function when the constructor function is invoked 
- When referencing a property of an object, the JS engine will first check the object, when the object's prototype, etc.
    - This could go all the way up to the Object, which has a .prototype of null, so the call will then return undefined
- Object.create(obj) creates a new object with the .prototype of obj
- An inherited property is a copy by refrence of the property stored somewhere in the prototypal chain 
- Mutations to the inherited property are passed down the chain, but if the inherited property is replaced, that change will not be passed down the chain
- In classical inheritance, objects inherit from special classes, whereas in prototypal inheritance, they just inherit directly from other objects 
- There are three types of prototypal inheritance: 
    - Prototype delegation: inheritance is mediated through a reference to a prototype's properties
    - Concatenative delegation: inheritance is mediated by copying each of a prototype's properties
    - Functional inheritance: inheritance is mediated by a constructor function 

## JavaScrit Modules

- Small units of independent, reusable code
- Namespaces that remain private when interacting with other modules
- module.exports was the previous native implementation of JS modules
- AMD and Require JS allowed for asynchronous module loading
    - These are no longer useful with the rise of ES6
- ES6 allows for a either synchronous or asynchronous module management

### Immediately Invoke Function Expression (IIFE) (review)

- Called immediately when defined 
- Surrounding parentheses are used to prevent the program from seeing it as a function declaration 
- Enables you to attach private data to a function, and it avoids polluting the global namespace
- Declaration version is compatible; the defintion is not
    - You can make a function definition work as an IIFE by wrapping it in parentheses