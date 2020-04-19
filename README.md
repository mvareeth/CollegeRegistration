# CollegeRegistration 

This project is written in PEAN stack.

http calls from Angular is re-directed to server app using api-interceptor.

To run this project first we need to install

NodeJS

AngularCLI

Then run following commnand in web and server folder

NPM Install 

Once we have the necessary packages, we can run the application by runnning following command in web and server folder

NPM start

then client will listern to 4000 and server will listern to 3000. Browse the client app to run the app.
Client - http://localhost:4000
Server - http://localhost:3000

Client app uses Jasmine with Karma for testing and protractor for end to end test like normal Angular CLI setup.
Server app uses chai, mocha and supertest for testing (including http calls). It uses nyc for code coverage.
