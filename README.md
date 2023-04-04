# Logo-Generator
- Initially I began by running npm init and installing inquirer and jest.
- Once those programs were in order, I set up a series of files including the
index.js and shapes.js files.
- The shapes.js file initially held most of my code around the classes, something I would
later delegate to the other files in the lib folder for clarity and cleanliness.
- The index.js file was made to house the questions and the function for writing the svg file.
- Initially there was some difficulty with getting the questions to run, as the version of 
inquirer I was on did not seem to want to respond, so I had to change the version to 8.0.0.
- Jest had also given me trouble, but I was able to bugfix that with little issue.
- Once I did get the program working, I had to readjust the dimensions I set for the shapes,
and also clean up the shape classes, as they had a lot of redundant and useless functionality.
- After this I gave them their own files as well and then gave those files test files.
- At this point all of the tests I set up seemed to run perfectly and the program itself
generated an svg file to all of the specifications I wanted.

[Walkthrough-Video]()