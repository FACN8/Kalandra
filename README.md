# Kalandra
Events Calender for Founders and Coders

## Project

We started our project by setting up the file structure, later on we started defining minimum viable product, while reading together the requirement and creating issues based on groupthinking. we then started imagining and defining front end side. and later on we made a diagram out of the databses.
https://dbdiagram.io/d/5e3961ff9e76504e0ef102cf

the group split to work on different aspects of the project, Ivan was responsible on making the front end side including mobile first design and structure, and basic functionality in the front end

lina took the server side and she built the server.js and the router.js and the handlers.js defining different functions to be used on the server side to contact the database taking into acount the different queries in the database with rabea and the different fetch requests from the front end with ivan

rabea worked on creating the intial database, building a fictive database as well as schema with the group and worked on creating the documentation for the project, as well as deploying database on othe computers, creating the get data functions

testing

This week's project will involve setting up a database which you connect to via a node.js server. You'll use your data to make a dynamic web app for your front-end.

### Requirements

- Simple web app with a node server and a database
- Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- Database hosted on Heroku, or locally
- Build script for your database
- Security concerns appropriately considered (you must protect against script injections!)
- Content dynamic, but DOM manipulation kept to a minimum
- Mobile-first design
- Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)
- test your server routes with supertest
- test your pure functions both server and client side
- set up a test database so that you can test your database queries

**Note**
We don't expect you to authenticate users (i.e. have a login or signup page), or even to simulate this feature. We'll cover how to do that properly in later weeks. Since these ideas were designed with Founders & Coders users in mind, we'll rely on trust instead of authentication :)

#### Founders & Coders events calendar

As a member of Founders & Coders who likes going to talks or meetups...
* I can add details of an event I'm interested in attending
* I can browse upcoming events
* I can register my attendance at an event or post a comment

Suggested additional requirements / stretch goals:
* Events can be assigned to different categories
* I can browse past events and write a review


### Getting started

Make sure you have a plan, and break the project down into manageable parts. Here are some things to consider:
* You will need to make the requests and update the DOM in response using client-side JavaScript.
* As well as serving static HTML and JS files, your server will also need to provide endpoints that return DB query results as JSON. You can query your server from the client using the XMLHttpRequest method.
* You'll need to be able to make both ```POST```and ```GET``` requests to your server.
