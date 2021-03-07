# VIRTA Charging Stations

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Call API to get 
all charging stations and browse to see the detail about each station.

_Note: Currently just get the stations data from a json file locally._

# Get started

### Clone the repo

```shell
git clone https://github.com/dashtaki/virta-charging-stations.git
cd virta-charging-stations
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm i
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.\
Shut it down manually with `Ctrl-C`.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Code scaffolding


### BEM

Use [BEM](http://getbem.com/introduction/) as CSS naming methodology and naming convention for writing cleaner and more readable CSS classes.
BEM also aims to write independent CSS blocks in order to reuse them later in your project.
That’s what I preferred to don’t use Bootstrap as a CSS framework and one more reason was it is a small project that it can be handled without any CSS framework.

### Spinner

I have created a component as Spinner for showing a loader while fetching data from server, in this case .json file,
Most of the time fetching data from .json file is fast in terms of response, then I tried to simulate latency about fetching data to show the spinner.
For simulating you just need to:

1. Got to `src/stations/stationslist.js`
2. Set `simulateLatency` in line:11 as `true`
3. Reload page

### SOLID
Regarding the `S` for `SOLID` I just tried to keep each function(component as a funstion as well) to
just responsible for a single task. That's why I just created a separate component for every part
and also keep the simple stupid ;)

### Error Handling
In case of multiple API endpoint I can provide a global error handling. As you can see I just throw the error in case of
error in fetching data from .json file.
