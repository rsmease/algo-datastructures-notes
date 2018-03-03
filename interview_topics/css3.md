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
- Feature detection: explicitly testing featuers of browser (good!)
    - Feature inference (same as browser sniffing) (bad!)
    - User Agent string detection (not as good a feature detection)

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

## Non-standard fonts

- Load from a content provider or from a set of font files within your directory
- Always provide a default font for graceful degradation
- You will need multiple file types (woff, eot, tff) to support all browsers if you choose to load the fonts locally from your directory

## CSS Selector Traversal

- This happens right to left, not left to write
- This allows for more efficient parsing of large rulesets because it allows for quick elimination of styles that do not apply to a particular component
- If read left to write, the browser would traverse the tree more frequently before discovering that the final piece of the rule excluded the search from consideration in the first place

## Pseudo-Elements

- ::before and ::after — allow for generation of a clearfix, but also for border styline to create a sense of distinction from other elements
- ::placeholder — style placeholder text
- ::first-letter, ::spelling-error, ::grammatical-error: style these pieces of text
- ::selected — style what the user has selected or highlighted

## Pseudo-Classes

- Native implementations of very common classes, generally with a direct relationship to user interaction
- :active, :checked, :hover, :empty, :enabled, :first, :last, :visited

## Display

- Inline elements do not respect top/bottom margins and cannot have height or width
- Inline-block elements do respect top/bottom margins and can have height or width
- Both inline and inline block respect right/left margins
- Inline-flex makes a flexbox (defaulted as a block) display as an inline-block

## Position

- Absolute: positioned with respect to the nearest relative parent
    - Creates a new stacking context
- Relative: positioned with respect to itself
    - Loaded as static but may be positioned using top/bottom/left/right with relation to its own position
- Static: loaded per the structure of the HTML and positioning of other elements
    - Top/bottom/left/right and z-index have no effect
- Fixed: positioned with respect to the viewport
    - Creates a new stacking context
    - When printed, it appears on every page


