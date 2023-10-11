# Zeller Customers App

This app shows Zeller customers based on their user type.

## Getting Started

### Prerequisites

1. Node v14 or above
2. NPM v6 or above

### Running App in Development Mode

1. Create an `.env` file in the root directory and add the following env variables with actual values.

```
REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT=<AWS_APPSYNC_GRAPHQL_ENDPOINT>
REACT_APP_AWS_APPSYNC_REGION=<AWS_APPSYNC_REGION>
REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE=<AWS_APPSYNC_AUTHENTICATION_TYPE>
REACT_APP_AWS_APPSYNC_API_KEY=<AWS_APPSYNC_API_KEY>

```

2. Run `npm install` to install the dependencies to the local node_modules folder.
3. Run `npm start` to run the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run Tests

1. Run `npm test` to launch the test runner in the interactive watch mode.
2. [Optional] Run `npm run test:coverage` to run the tests and generate the coverage report.

### Build App for Production

Run `npm run build` to build the app for production. The build files will be generated in the `build` folder.

## Functionality

This web app calls a GraphQL API hosted in AWS to retrieve the list of Zeller customers and displays the customers on UI based on their user type.

Functionality of files in each directory can be described as follows:

| Directory      | Functionality                                                                              |
| -------------- | ------------------------------------------------------------------------------------------ |
| src/components | Re-usable components of the project                                                        |
| src/config     | Config files which are used to configure and connect with AWS hosted GraphQL APIs          |
| src/constants  | Constant values used throughout the project                                                |
| src/contexts   | React contexts defined in the project resides here which are used to manage state globally |
| src/modules    | UIs developed using re-usable components provided in `src/components` and MUI components   |
| src/queries    | GraphQL queries which are used to retrieve data from backend APIs                          |
| src/test-data  | Sample data sets which are used in the unit tests                                          |
| src/types      | Custom defined types which are used throughout the project                                 |
