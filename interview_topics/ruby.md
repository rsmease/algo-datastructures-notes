## Lambda, Blocks and Procs

- Blocks are the JS closure: a way of presenting an execution context that has private variables and an output
    - Blocks can be single line or multiline
- All methods in Ruby will accept a block, even if they are not necessarily expecting one
- Use 'yield' to run a block that was passed as a parameter to the method
    - We can conditionally check 'if block_given?'
- A Proc is just a block that is passed to a variable, and it should be executed with Proc.call() rather than yeild
    - This is more or less identical to the way that anonymous callback functiosn work in JS
    - I suppose a _block_ would be the anon function, whereas _proc_ would be the named function
- Lambda is bascially a refined version of block: lambdas have a rigid requirement for the number of arguments
- Procs will cut short their declared execution context, exiting from a method as would happen with a for/while block
    - Lambdas are more rigidly closed over and will only return from the context of the lambda

## SQL Indexes

- Sure, you can sort anything you pull from your DB in nlog(n) time, but what if you would have it in n time?
    - Indexed columns will allow you to query on N time
    - This means that your insertions will be n logn instead of 1, although a good database could confirm the assertion, return status confirmation and then sort, saving you time

## Method Missing and Send

- Allow for metaprogramming in Ruby, which is one of the favorite features of the language for many programmers
- Method missing allows you to gracefully handle unknown methods and capture their arguments and blocks
    - E.g. you can search a table for similar methods in the current or in ancestor objects and then call the method as an alias to some known method
    - You can also collect method names until receiving a particular ending condition and then execute all of the methods at once!
- Send method calls the method on the receiving object with the given inputs
    - It's useful in the method-missing pattern

## Ruby Interpreters

- Ruby MRI is the default Ruby interpreter, written by Matz in C
    - MRI benefits from more paid core team members than any other Ruby implementation
    - A new version is released every Christmas
- JRuby is an intepreter that sits on the Java Virtual machine
    - Allows Ruby to run anywhere that Java can run
    - Allows you to offer Rails-based solutions to Java-only deployment environments
- mruby is an embeddable version of Ruby that can interact with Raspberry Pi
    - It's also beingused to build iOS apps as a competitor to RubyMotion
    - Likely to see more of mruby as the IoT takes off
- Opal transpiles Ruby into JavaScript
    - Allows you to build a complete fullstack web application using only Ruby
    - Enables you to interact with famous JS libraries like JQuery
- RubyMotion is an implementation that allows Ruby to access Cocoa APIs through Ruby
    - It's written with Objective C and is tailed to the Cocoa framework

## Overview of Rails Architecture

- ActiveRecord: object relational mapping to the database
- ActiveResource: maps ActiveRecord object models to RESTful routes under API namespace (api.model_name.com)
- ActionPack: controller and view layers 
    - Handles and responds to web requests, providing routs, controllers to act at particular routes and views to be displayed after controllers complete their actions
    -ActionPack::ActionDispatch parses information about a web reqquest and decodes HTTP requests
    -ActionPack::ActionController provides base controlle rclass and approrpiate methods for dispatched requests
- ActiveSupport: provies a bunch of syntactic sugar, e.g #deep_up, #try, #in?, #delegate, #html_safe?, #remove, #truncate, #starts_with?, #ends_with?, #pluralize, #singularize, #camelize
- ActionMailer: emailer

## CSRF and Rails, XSS and Rails

- Cross-Site Request Forgery
- Send a request from another site that is impersonating a current session on our site
- Prevented by providing requests from our site with a special token that requests from other sites won't have
- XSS is the injection of malicious scripts into inputs on the site
    - Prevented by scrubbing all inputs or restricting allowed inputs to prevent malicious scripts (ActiveSupports #html_safe or strict params.allow() method

## Mass Assignment Vulnerability

- A too permissive ORM allows for injection of SQL that gives users too much power
- Combatted by marking specific fields as immutable
- Combatted by restricting the inputs allowed by params, similar to the prevention method for XSS discussed above
-attr_protected will also prevent mass assignment on certain columns

## Server Options

- Apache and Nginx allow for standard static web services
- Puma is the new default server and allows for multithreading, which is useful for web apps
- Unicorn is a mature web app server that has been adapted for Python, toos
    - Very good at spawning worker processes to serve requests
    - Monitors the workers to prevent memory and process issues
- WEBrick is slower and less robust; it's the old default
- Phusion Passenger is multithreaded and integrates directly into Apache,Nginix

## Issues with Rails

- Ruby is up to 50 times slower than C
- Rails used to have issues with memory leaks because of aggressive garbage collection by Ruby
    - This is no longer as much of an issue
    - You're especially find if you're using JRuby, which gives you the memory management tools of the JVM
- Rails is admittedly not the best choice for massive projects that requires a lot of precision
    - Ruby would also be a bad choice for e.g. games, where performance is critical to the millisecond


