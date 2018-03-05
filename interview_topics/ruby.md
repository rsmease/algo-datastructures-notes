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
- Send also allows you to execute private methods within a class
- Another fun metaprogramming is 'define_method'

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
    - It's written with Objective C and is tailored to the Cocoa framework

## Overview of Rails Architecture

- ActiveRecord: object relational mapping to the database
- ActiveResource: maps ActiveRecord object models to RESTful routes under API namespace (api.model_name.com)
- ActionPack: controller and view layers 
    - Handles and responds to web requests, providing routes, controllers to act at particular routes and views to be displayed after controllers complete their actions
    -ActionPack::ActionDispatch parses information about a web request and decodes HTTP requests
    -ActionPack::ActionController provides base controlle rclass and approrpiate methods for dispatched requests
- ActiveSupport: provies a bunch of syntactic sugar, e.g #deep_up, #try, #in?, #delegate, #html_safe?, #remove, #truncate, #starts_with?, #ends_with?, #pluralize, #singularize, #camelize
- ActionMailer: emailer

## CSRF and Rails, XSS and Rails

- Cross-Site Request Forgery
    - Send a request from another site that is impersonating a current session on our site
    - Prevented by providing requests from our site with a special token that requests from other sites won't have
- XSS is the injection of malicious scripts into inputs on the site
    - Prevented by scrubbing all inputs or restricting allowed inputs to prevent malicious scripts
    - ActiveSupport's #html_safe or strict params.allow() method

## Mass Assignment Vulnerability

- A too permissive ORM allows for injection of SQL that gives users too much power
- Combatted by marking specific fields as immutable
- Combatted by restricting the inputs allowed by params, similar to the prevention method for XSS discussed above
-attr_protected will also prevent mass assignment on certain columns

## Server Options

- Apache and Nginx allow for standard static web services
- Puma is the new default server and allows for multithreading, which is useful for web apps
- Unicorn is a mature web app server that has been adapted for Python, too
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

## Rack

- Rack is a Ruby-based CGI (Common Gateway Interfact), which offers a standard that allows web servers to execute programs, generating web pages dynamically
    - Adapts Rails/other frameworks to Ruby runtime environments
- Rack is a collection of middleware for Ruby web applications
    - It allows you to interact with Sinatra and Mongrel or Rails and Unicorn or Rails and Mongrel or Sinatra and Puma, all without dealing with the specifics of the interactions between them
- The great part of Rack? We're allowed to add, remove and customize the middleware as needed

## Caching

- Page caching: add a gem to allow you to cache an entire HTML page in a public directory
    - No need to rerender the view again on subsequent requests
    - Awful for dynamic sites, but wonderful for mostly static sites
    - Use cache_pages: controller_method in the controller
- Action Caching: again, add a gem, this time to allow you to cache a particular set of HTML
    - This allows you to cache pages that require business logic before they can be run
    - E.g. allows you to cache authenticated views
- Fragment caching: cache fragments of websites for dynamic applications
    - These caches automatically expire when the component is updated
    - Russian doll caching is a form of caching that allows you to expire only nested elements when a particular change takes place, much like React will only selectively update components

## Super vs Super

- Super: find the method with this name in the next available parent, including passing the arguments given to the current method
- Super(): repeat the super process but explicitly pass no arguments

## Ruby Comparators

- ==: do the have the same value (type coercion here)
- ===: used within when classes of case statements
- eql?: checks value and type, cf. strict equality operator in JS
- equal?: checks that two variables point to the same address in memory

## Extend vs. Include

- include: adds/overwrites the module methods as instance methods (remember include, instance)
- extend: adds/overwrites the module methods as class methods

## Class Inheritance in Ruby

- instance variables: available to all members of an an instance if initialized
- class variables: automatically super'ed to the highest available parent with the variable
    - affects all inherited members instance of that variable because they all have the same pointer
- everything in Ruby is an object that inherits from Object (which inherits from Kernel < BasicObject) by default
- instances variables are private to each individual, even if they seem to pull methods from parents via super
    - to create a single pointer shared by all members of a class but by none of its parents or children, create an instance variable and control assignment to that variable via self.class.variable_name
    - this pattern is different than normal instance variables, which are not shared between sibling instances unless they are generated as defaults within the initialize method
- You are limited to _one_ parent from which to inherit in Ruby
    - Multiple inheritance may be modelled with module mixins
    - Ruby will check mixins before checking the parent class
    - Ruby will check mixins in LIFO order

## Private vs Protected Methods in Ruby

- Private methods can only be called implicitly by other methods of an instance
    - They cannot be called from outside of the class definition, where the instance is the receiver
- Protected methods can also be called implicitly from any child classes, as long they are called privately within the child class definition
    - They use an implicit receiver self, athougth a fun trick would be to use a receiver of a sibling class that also inherits from the parent class: Sibling.new.method_name will operate just like method_name or self.method_name
    - This trick cannot be used by non-sibling classes

## Classes, Objects and Modules

- Class: blueprint for creating an object with methods, variables, etc.
    -eigenclass: instance of the class constructor that represents the class in memory
    -eigenclass is the self receiver in class methods
- Object: instantiation of class blueprint, perhaps with local variable reassignment or mutation
- Module: namespaces, allow for multiple inheritance, cannot be instantiated
- Self: always refers to the current object, not pollution prone like this in JS



