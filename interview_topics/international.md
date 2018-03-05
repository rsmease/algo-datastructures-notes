## Localization

- Localization: translation of your app to reflect other languages where string inputs are available
- Internationalization: extension of apps architecture to allow for localization of content
    - Isolate all strings for translation and replace with a data structure that allows for option switching
    - Use standard APIs to handle the different writing systems and locale formats
    - Mirror interfact to support right-to-left languages as needed
- Xcode supports testing of localized version of the application
    - UI can be reviewed in the interface builder
    - Run the app with language options to suss out any unlocalized text
    - Ask native speakers to test the application

## Reviewing Language and Region Settings

- In iOS, changing the language will reset SpringBoard and quit any running apps
- Changing the region and changing the language are not the same
    - Changing the region would e.g. change date and time formats, without changing the language

## Internationalizing User Interface

- Pseudolocalization can allow you to test layouts
    - What would a left to right layout look like?
    - What would a language with much longer text for this action look like?

## Internationalizing Code

- Separate user-facing text from the code
    - Replace strings with the return value of an NSLocalizedString macro (NS is NeXtStep)
- Add data selectors to all inputs to manage incoming data 
    - Names, dates, etc. might not look anything like you're expecting
- Get the current system language or the currently language that the user is typing by using preferredLocaliztion and textInputMode
- Get the appropriate date / time / etc. formatting by using the NSLocale object and manage formatting with NSDate  (where there are multiple ways to represent the date in a given locale) — see also NSNumber and NSTime
- NSCalendar will allow you to compute the appropriate date when considering the calendar 

## Supporting Right-to-Left

- Support RTL using base internationalization and Auto Layout
- Use the leading and training attributes, not the left and right attributes
- Controls that should not flip in RTL context:
    - Video controls and timeline indicators
    - Images, unless they communicate a sense of direction
    - Clocks
    - Music notes and sheet music
    - Graphs
- RTL languages will often feature LTR content for foreign brands
    - Use standard layouts that are build to handle this for you

## Localizing Your App

- Export all development language string files that contain user-facing text to a standard XML Localization Interchange File (XLIFF)
    - Using base internationalization will make this easier
- If you localize for multiple versions of the same language across different regions, the Bundle Search pattern will prioritize checking the region before the language
- Add .stringsdict files for languages that have different pluralization rules
- XCode has tools to help you locate unlocalized strings


## Auto Layout

- You will always have constraints when building a layout
- UIStackView allows you to arrange your views linearly
    - Manages your constraints, allows for different alignments
    - Properties similar to the CSS flex property
- Constraints the AutoLayout property that allows you to build managed layout grids
    - Adding priority lists can make layout builds more manageable
- Leading and trailing are important to RTL internationalization
    - Left/right will not flip the view correctly
    -Will flip the items but will not right-align the text within the items
- Layouts are built using a layout engine which has a set of rules that it follows
    - This amounts to a reusable API that can be pushed to different iOS window sizes or different MacOS window sizes
- Layout Cycle:
    - Application Run Loop -> Constraints Change -> Deferred Layout Pass
    - Layout is recomputed when constraints change
        - Constraints are updated
        - Reassign view frames

## Advance Topics in Localization

- Things to localize:
    - Duration over multiple days
    - Energy, length and mass
- Language choice impact:
    - The preferred language sent by HTTP requests
    - Apps and websites should use the preferred system language
- Locale choice impact: 
    - Formatter behavior, calendar behavior
    - You can override a default calendar or a default currency
    - Quotation start and end patterns (<< >> vs '')
- Don't use locale to guess the user's location
- Don't use locale to guess the user's preferred language
- You can't make assumptions about the regulatory requirements for a user based on their preferred locale
-NSBundle.localizedresource is the best pathway to managing localized context behavior

