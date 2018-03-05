### HTML 5

## What's doctype? 

- Declares the version of the markup language used in the document that comes after the doctype tag
- Among HTML documents, it also adds value by specifying an HTML version

## How would you localize content? 

- For small sites like I have build, store options hashes / JSON objects keyed to browser language choices and inject the appropriate languages in all fields depending on user selection
    - You can also add a script to match the user's browser language
- Beyong language,  think about formatting and have a flexible grid that can be flipped for users that are accessing the content in a right-to-left language context

## DOM Node Property vs. HTML Attribute

- Properties are keys on the DOM node that produces the HTML element
- Attributes are native HTML elements
- Typically, when you want to manipulate things with JavaScript, use properties instead of attributes
    - Attributes have a corresponding property in the DOM node that loads the HTML
    - Native attribute defaults can't be overriden on page load with JavaScript

## Key new elements of HTML5

- Semantic tags for more accessible, crawler-friendly site layout
- New form elements for more effective data inputs
- Native video and audio inputs and controls
- New JavaScript API, new Geolocation API, new Webworker API
- New localStorage and sessionStorage feature

## HTML5 Storage Options

- Cookies: only strings, sent with every request, small (4KB)
- localStorage: stored indefinitely, a lot more space (5MB), only available on same origin
- sessionStorage: stored only during the current session, a lot more space (5MB), only available on same origin

## Script Loading

- script: load immediately
- script async: loaded asynchronously (non-blocking)
- script defer: load when DOM content is loaded
- load CSS in the head so that it's loaded by the time the DOM renders the elements and their styles
- load Javascript that is blocking after the body
    - Do not load blocking JavaScript that is required for the styling! or you'll face FOUC

## Streaming Data vs. Bulk Loading

- Great for large data inputs or unstable networks
- Loading scripts as multiple, asynchronous calls that can be patched onto the page in order
- Great for preventing visitors from bouncing

## How do you make images responsive? 

- <img> tag's srcset along with media queries defined in sizes will allow for precise use of different image sizes
