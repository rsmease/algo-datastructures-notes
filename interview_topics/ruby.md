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

- 
