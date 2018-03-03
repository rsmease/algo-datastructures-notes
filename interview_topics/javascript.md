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