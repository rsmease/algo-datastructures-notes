## Benefits of Unit Testing

- Increase the quality of code by enforcing a preventative mindset
- Allow for later changes to be made more easily (run the old tests to confirm consistent performance)
- Makes it easier to write documentation
- Makes debugging easier because it allows you to isolate source of errors with more precision

## Drawbacks of Integration Testing

- Considerably time-consuing
- Testing does not guarantee an absence of errors
- It can be hard to set up realistic, useful tests for a new product
- Could be difficult to integerate with a VCS
- Test programs cannot be run in an actual deployment environment
- Test code will have errors and bugs of its own!

## How to Debug

- Use a debugger
- Use console.log() statements
- Test early and test often to catch bugs before they appear!
- Use chrome developer tools to view behavior of the interface that is failing
- _read_ your errors

## Testing Pyramid

- Unit tests: input/output tests of specific functions
- Integration tests: input/output tests tracking interactions between smaller units or tracing a process through several units
- Web Driver / UI tests: test the ability of a bot to navigate HTML and find expected elements