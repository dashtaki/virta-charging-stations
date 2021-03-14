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

### `npm cypress:open`

Launches E2E test runner in the interactive watch mode.\
For running test you have to:

1. Run `npm start`
2. Run `npm run cypress:open`
3. You can see test cases in Cypress window

I Also have written some unit test for some functions, like in `/src/api/api.js` and
`/src/herpers/geo-location.js`w

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run pretty`

Run **prettier** to run make code prettier :)

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Dssign

The application look and fell is based on provided UI/UX taht is
available on this [Abstract](https://app.abstract.com/share/aea01f0c-8698-4982-a005-572863ecd211) Url.

# Code scaffolding

### BEM

Use [BEM](http://getbem.com/introduction/) as CSS naming methodology and naming convention for writing cleaner and more readable CSS classes.
BEM also aims to write independent CSS blocks in order to reuse them later in your project.
That’s what I preferred to don’t use Bootstrap as a CSS framework and one more reason was it is a small project that it can be handled without any CSS framework.

### Spinner

I have created a component as Spinner for showing a loader while fetching data from server, in this case .json file,
Most of the time fetching data from .json file is fast in terms of response, then I tried to simulate latency about fetching data to show the spinner.
For simulating you just need to:

1. Got to `src/components/stations-list/stations-list.js`
2. Set `simulateLatency` in line:11 as `true`
3. Reload page

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by add a pre-commit hook. For more detail check package.json, husky section.

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a funstion as well) to
just responsible for a single task. That's why I just created a separate component for every part
and also keep the simple stupid ;)

### Error Handling

In case of multiple API endpoint I can provide a global error handling. As you can see I just throw the error in case of
error in fetching data from .json file.

### Browse-ability and bookmark-ability

User can see station detail from the main screen(`/`) or even you can directly
use specific station id in address bar as param, for instance for station id **101** it should be
like `/station/101`.

### Styled-Components

There are tons and tons of ways to use styling in React, but one way that looks to be the best practice is to make components within
your component to style directly. These styled components affect only
that specific component in which they are rendered, and nothing else. Components in React work the best when they are small, focused, and reusable.

### React-Redux

I do not use any state management tools because of 2 reasons:

1. It was not mentioned in the requirement of the assignment
2. Based the assignment scale I decided to keep it simple by avoiding Redux pattern complexity
3. Last but not least, No need to add use state management capabilities, maybe in the next step, as you mentioned
   maybe assignment for the next round will be larger. Of course, If I passed this step :)
