Customers Information app
=============

In order to build and run the application, please follow through the steps listed as below

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Grunt & Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g grunt
npm install -g grunt-cli
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```

### Make sure to clear cache when switching branches or projects

```
npm run app-clean
```

### Remove node and bower folders manually or use the following

```
npm run app-remove
```

### Install all needed packages and modules for both bower and node

```
npm run app-update
```

This will run through and install all dependencies listed in `package.json` as well as `bower.json` and download them
to `node_modules`, `bower_components` folders in your project directory. Make sure everything passed and no error(s) in the output results

### Start the server to have database set up

````
cd dashboardServer > npm install > npm start
````

### Build the app and preview it on the browser

````
grunt serve --force
````

Be sure to be in the app level when running in order for it to work

Features:
Add a Customer: The customer can be added using “Add Customer” button. 
Edit a customer: The edit can be done using edit button at right side of each customer
View a Customer: The customer is viewed from the dashboard server from backend using express.js routes.
Delete a customer: The delete can be done using delete button at right side of each customer
Persistence: this app does not handle persistence. The added customer will not be available after the page refresh.
