# SpyPress - A Server Visualizer
###### Developed by: Ruth Anam, Michelle Herrera, Mark Shin and Anthony Toreson

## TL;DR 
### What is SpyPress?
SpyPress is a lightweight, open source library designed to help developers visual requests and responses from the server.

## SpyPress - Extended Cut
### The Problem
There’s a strange satisfaction when you first create a box or button and have it appear on the front end of your application. Maybe you create a button with an event listener, sure you can go to the front end of your application to test to the functionality of your button BUT what does this action look like in the back-end? 

How do you <strong>VISUALIZE</strong> requests and responses, all the bits of data being de-complied and recompiled and data flowing in and out of your database?

## SpyPress is the Solution
It might be difficult to imagine a piece of data flowing in and out of your code base, but we can utilize the front-end to display any information we send. Imagine piece of data being represented as important person (ie: the President of a country). We want to send a spy to constantly keep a watch on this person and report back on all of this person’s moves. This spy name is SpyPress.

Spy Press is a library that can be installed alongside any project to spy on requests and responses coming to and from the server. Using SpyPress is as easy as installing the npm package and requiring the the library to be used in your server file. SpyPress comes with a set of methods that allow the user to "listen" to the communications made with/by the server on the backend. Once incorporated into your project, all you need to do is run your server in development mode. Skypress will open up it’s own server on a localhost port to display all requests and responses via the front end in the browser.

## Who is SpyPress for?
Spypress is meant for developers working with lightweight server-side frameworks. Developers can utilize SpyPress to visualize the servers they are creating and managing allowing them to optimize their servers through constant, real time monitoring of data passed from the client to server to database and back!

## What's next?
- Implement a database to store each session in history for review at another time.
