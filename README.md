# NODE-EXPRESS-TS

This project is a simple loan application API server implemented using TypeScript and Express.

## Structure

- `src`: Folder containing the source code for the server application.
  - `app.ts`: The main file for the Express app.
  - `utils.ts`: File containing common utility functions.
- `database`: Folder containing files related to the database.
  - `LoanApplication.ts`: File defining the interface for loan applications.
  - `loanData.ts`: File containing mock loan data.
- `tests`: Folder containing test code.
  - `app.test.ts`: Test code file for `app.ts`.
  - `utils.test.ts`: Test code file for `utils.ts`.

## Installation

To install the project on your local system, follow these steps:

1. Clone this repository
2. Go to the folder (cd LoanApplication)
3. Install the required npm packages:

npm install


## Running the Project

To start the development server, run the following command:

npm start

The server will be running at `http://localhost:3000`. (nodemon will be running)


## Running Tests

To run the tests for the project, use the following command:

npm test

This command will execute all test files in the `tests` folder.

## Running Code Coverage

To measure the test coverage of the project, use the following command:

npm run coverage

**Review the Report**:
   - The coverage report will be generated in the `coverage` folder within your project directory. To view the detailed HTML report, open the `coverage/lcov-report/index.html` file in your web browser.


**
## HTTP Response Status Codes

This API utilizes the following HTTP response status codes:

- `200 OK`: The request has been successfully processed. This status code indicates that the resource for a GET request has been included in the message body and transmitted.
- `201 Created`: The request has been successfully processed, and a new resource has been created. This status code is sent after POST requests or some PUT requests.
- `204 No Content`: The request has been successfully processed, but there is no content to send. This status code is often used after DELETE requests.
- `400 Bad Request`: The server could not understand the request. This typically occurs when the client's request format is incorrect.
- `404 Not Found`: The requested resource could not be found. This status code is sent when the requested resource does not exist on the server.
- `500 Internal Server Error`: There is a problem with the server, and it cannot process the request. This status code is sent when an error occurs inside the server.

  
**
