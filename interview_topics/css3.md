### CSS

## What is BEM?

- Block-Element-Modifier is a common pattern for naming CSS classes that allows you to have more extensible, readable code

## What's up with the data attribute?

- Allows us to store arbitary data in HTML tags, which we can access for DOM manipulation
- Data attribute is probably what's sitting behind the props/state architecture of Redux
- CSS also has access to this attribute, and it can perform regex searches for very precise styling patterns

## CSS Selector Specificity

- Hierarchy of reference for CSS selectors
- CSS will display only the most specific style where conflicts arise
- E.g. a class on a paragraph will override a style on the general paragraph tag
- Styles declared later in a document that have the same hierarchy are considered more specific

## Reset vs. Normalize

- Reset.css or a reset file more generally simply aims to remove browser specific styling decisions that create inconsistencies between browser views: e.g. the blue shadow that appears on focused form inputs in Chrome
- Normalize.css is a library that actually inputs a few opinionated styles to produce an identical experience between browsers that developers and build up from

## Floats and the Clearfix

- Floats will allow for wrapping text around an element
- Floats were also a popular way to build styling architectures before flexbox and css-grid
- The clearfix allows you to move an element below one or more floated elements when its default behavior would have the element sit beside the two floats
- Float's parent elements will collapse, regardless of the height of the float

## Z-index

- Determines the stack order of two dimensional elements on the window
- Default stack: background -> elements with negative stacking context -> block elements -> float elements -> inline elements -> positioned elements
    - Two elements with the same stack order? — The one written lower in the HTML will appear on top
- Z-index only works in a position context of fixed, relative or absolute

## Block-Formatting Context 

- Block-formatting context: a container region that exists due to the presence of a block element, inline block element, positioned element, etc.
    - Contains the objects within it, althought the context may collapse if all of those elements are floated
    - Clearfix allows you to break out of the float space within the local block-formatting context

## Supporting Old Browsers

- Always check if the browsers supports the feature, rather than checking the browser type and assuming that the current version will have the expected feature support (this is called 'browser sniffing')
- Use graceful degredation: allow older browsers to calmly ignore new features without making UX terrible
- Use vendor prefixes or polyfill where necessary 

## Hiding Content

- Visibility hidden: remains on the DOM
- Display none: removed from the DOM
- Position left -999rem: still accessible to screen readers

## Media Queries

- With mobile first, build the mobile layout view and then write media queries for larger screens
- Media print and media speech are also available for printing and audio synthesizer contexts
- Also includes selectors and, not and only for more prescriptive rulesets 

## Writing Effective CSS

- Avoid redundant styles
- Avoid !important and #id
- Use BEM naming conventions for clarity and approrpiate cascades of specificity
- Allow inheritance where appropriate
- Never use inline styling

## CSS Preprocessors

- Love that I can define and resuse variables
- Mask over the use of vendor properties so that I can have more readable CSS
- Easy to reuse and generalize styles that involve slight variations in a pattern
- Reduce performance of the styling
- Without e.g. Rails and hot reloading, developing is slower if you have to compile the styles 

## Box Model

- Content, padding, border and margin
- Box-sizing will allow you to include or disclude the border and padding from the dimensions of the box
- Border-box adds both padding and border to the box's dimensions

