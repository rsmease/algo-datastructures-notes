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