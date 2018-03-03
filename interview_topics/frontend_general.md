## Improving Site Performance

- Minify files, removing whitespace that the computer doesn't need so that pages load faster
- Load JavaScript asychronously, where possible
- Prefetch data or even just a DNS address at particular links so that the request-response cycle moves faster
- Use a content delivery network to reach a global audience
- Use React so that you're only updating the virtual DOM!
- All for lossy compression algorithms that do not make a difference for the user
- Expensive styling (anything requiring a prepaint calculation) will be more costly for performance, although in general, the browsers are not ridiculously fast at this

## Rendering your code in the browser:

- Build trees to traverse: 'compile' HTML and CSS to build DOM tree and CSSOM tree
- Tree Traversal: traversal all visible nodes, find appropriate CSSOM rules and apply them (build the render tree)
- Layout: browser decides how much space each element needs to occupy
- Paining: browser fills in all the pixels by rasterizing the code into a bitmap (not yet on the screen)
- Compositing: browser draws elements on the scren in the correct order, so that it matches the expected bitmap

## Improving SEO

- Allow for descriptive, hypen-separated url text
- Add media queries, flexbox and CSS grid to meet Google's mobile friendly requirements
- Add alt-text to images to ensure that they're index in Google Image search
- Make your page easy to navigate, using HTML5 semantic tags

## Security Concerns

- Cross-site scripting: JavaScript injection into a clients HTML, allowing e.g. access to a client's cookies, which enable impersonation of the client
  - E.g. #2: You could add a script to update a database with an additional link every time that someone views content, even if they don't click the like button
  - Primarily controlled by scrubbing all inputs and never exposing scripts to the user
- Cross-site forgery request: Browser sends requests impersonating the user, but from other sites where they can control the content
  - Controlled by installing a cross-origin policy that prevents foreign requests
- SQL injection: injection of SQL to pull from or push to the database
  - e.g. the likes generator above, or SQL commands to retrieve sensitive user data
  - Controlled by scribbing all inputs

## Buzz Words

- Gradeful degredation: building for modern browsers and giving older browsers and OK view of things
- Progressive enhancement: building for older browsers and slowly adding new features that are available on modern browsers
- Flash of unstyled content: add script to add display class to HTML tag only after blocking scripts are loaded
- CSS vs. JS animations: CSS will load faster, but JS will offer more control, even frame-by-frame with requestAnimationFrame()
- CORS: cross-origin resource sharing, a protocol for making cross-origin HTTP requests
  - Browsers will send a pre-flight request for certain kinds of HTTP actions to make sure that it's safe to send a request to the specified server (typically a content delivery network of some kind)

## Accessibility

- ARIA: accesibile rich internet applications
- Make headers orderly and make semantic HTML5 tags do the work for you
- Add alt text to images and descriptive, unique names to all links 
- Add labels to your form and explicitly match them with inputs 
- Use ARIA best practices for all popups, modals, alerts, dropdowns, etc.  
