# Stream1-Project

## Overview

### What is this site for?

This is a website for a UK based band who perform regularly at weddings. It will advertise the various services offered by the band, provide videos and audio clips for fans and allow people to book the band for events.

### What does it do?

The website will allow users to complete a form and contact the band regarding bookings and will allow users to access media files from the band.

### How does it work?

This site will use AngularJS as it main framework, HTML5, CSS and will be styled with Bootstrap.

## Features

### Existing Features
	- Image carousel

### Features to Implement
	- User Based Features
		- Media files displayed on website
		- Band details
		- Contact form

## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - **npm** is used to help manage some of the dependencies in the application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of the libraries and frameworks

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
