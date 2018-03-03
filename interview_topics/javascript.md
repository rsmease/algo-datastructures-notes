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
- AMD and Require JS allowed for asynchronous module loading, removing dependency issues
    - These are no longer useful with the rise of ES6
- ES6 allows for a either synchronous or asynchronous module management

## Immediately Invoke Function Expression (IIFE) (review)

- Called immediately when defined 
- Surrounding parentheses are used to prevent the program from seeing it as a function declaration 
- Enables you to attach private data to a function, and it avoids polluting the global namespace
- Declaration version is compatible; the defintion is not
    - You can make a function definition work as an IIFE by wrapping it in parentheses

## Anonymous Functions

- Used when passed to other functions
- Used when creating a closure within another function

## Host Objects vs Native Objects

- Host objects are objects provided by a library or generated within a program
- Native objects are objects native to JavaScript (e.g. Object, Array, String);

## Ajax

- Allow you to update the DOM by communicating with servers without updating the page unless necessary to repaint the new information onto the page
- Reduce the amount of traffic that has to travel from client to server and back
    - Response times are faster because of smaller traffic
- Easy to use: communicate with the HTTP protocol using RESTful methods
- AJAX data cannot be indexed by Google unless it is called automatically when the page loads
- You can bypass the same origin restrictions by requesting JSONP instead of JSON
    - Has been replaced with the CORS standards
    
## Event Capturing, Bubbling (review)

- Bubbling principle is simple: for most events, once you find the specific target of the event, you call its event listener and then all event listeners in the chain of parent objects
    - Not all events bubble; focus is a notable exception
- event.target is the target that initiated the event bubble
    - event.currentTarget is the object where a clickhandler is stored, not necessarily item that was clicked, but the first available parent 
- two ways to prevent buddling:
    - event.stopPropogation() // turn off all parent handlers
    - event.stopImmediatePropogation() // turn of my handler and all parent handlers 
- Don't stop bubbling unless you have a specific reason for doing so
- Three phases of event management:
    - Capturing phase: starting from the body and moving to the event.target
    - Target phase: running listeners on event.target
    - Bubbling phase: running listeners on all ancestors of event.target
- The capture phase is normally invisible to us; it's rarely used for programming
    - To use the capturing phase, just add a second param 'true' to your element.addEvenListener() methods
- In the full process, code on event.target would be run twice (once during capturing, once during bubbling) if we just run code on every loop
- There's an event.eventPhase property that tells you the number of the phase when the element was caught, but this is rarely used
    - 0, not processed, 1, capturing, 2, target phase, 3, bubbling phase

## 'load' vs. 'DOMContentLoaded'

- load: images and iframe (as well as teh DOM) are ready
    - Might involved additional application logic that builds at runtime
- DOMContentLoaded: just the DOM is ready

## Strict Mode (review)

- Benefits of strict mode: 
    - Makes debugging easier, by reducing the number of silent errors
    - prevents accidental global variables by throwing errors
    - prevents invalid use of delete by throwing errors
    - prevents duplicate property names, parameter values 
    - make eval() safer by make sure that variables created within eval are not hoisted beyond the scope of eval()
    - referencing a 'this' value of null does not coerce to the global object 
 
## Promises

- Allow for chaining of callbacks to handle the result (success or error) or asynchronous functions
- Generally preferred over nested callbacks, although simple callbacks might be preferred to promises because they carry less overhead (Promises have to actively listen for their status)
- Promises will have to be polyfilled when working with older JS engines

## Languages that Transpile to JS

- Advantages:
    - More features than are available with slow-to-develop JS, which needs to be supported widely by browsers
    - Types (TypeScript), which allow for more poignant control of JavaScript
    - Classes and inheritance features to make JS better resemble Ruby
- Disadvantages:
    - Possibly harder to find other developers who know the language
    - Will probably need webpack or gult to automate all transpiling and bundling

## Immutability in JS

- Mutability is the default consensus of JS; most things are mutable
- ImmutableJS library hurts performane a little, but makes it easier to trace bugs related to mutation
- Immutable patterns are comment when working with functional programming paradigms (e.g. Redux)

## Static Class Properties

- Allow you to make calls directly on the class 
- Makes sense for methods that apply to a general type rather than an instance 
- Most useful for factory methods that need access to the classes unmutated values
- Associated with the class that produces the instance, not the istance's prototype

## Spread vs. Rest

- Spread lets you destructure an array that's passed as a parameter
- Rest lets you collect comma separated values into an array

## What's so great about currying?

- Allows for more expressive code (think Promises)
- Allows for real-time handling of asynchronous execution patterns (again, Promises)

## Template Literals

- Advantages
    - Allow you to escape HTML unsafe code with html''
    - Allow you to call functions or write simple expressions within the ${}