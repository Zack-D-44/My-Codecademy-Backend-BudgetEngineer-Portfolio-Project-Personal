# My Codecademy Backend Engineer Career Path Envelope Budgeting API

This is the backend for a budgeting application that utilizes the effective envelope method. The API I created allows users to manage their finances by creating and deleting envelopes, adding or withdrawing funds from envelopes, transferring funds between envelopes, and viewing the current balance of each envelope.

## Features

1. Envelope Management
   - Create and delete envelopes by specifying category.
2. Fund Management
   - Add or deduct funds from envelopes, with checks in place to prevent negative balances.
3. Fund Transfer
   - Transfer funds between envelopes, with the option to move all funds from one envelope to another.
4. Envelope Viewing
   - View all envelopes and their balances, or retrieve the balance for a specific envelope.
5. Error Handling
   - Clear error messages for invalid operations or inputs.

## How To Use

To use the app:

- Clone the repository using the `git clone` command in the terminal
- Navigate to the cloned repository using the terminal
- Run the command `npm install` in the terminal, to download all required node packages
- Start the server by running the command `node server.js` in the terminal
- Make calls to the API, for example by using Postman

## API Endpoints

- View all existing envelopes: GET `http://localhost:4000/view-envelopes/`
- View specific envelope: GET `http://localhost:4000/view-envelopes/CategoryName`

- Create envelope: POST `http://localhost:4000/manage-envelopes/create-envelope/CategoryName`
- Delete envelope: DELETE `http://localhost:4000/manage-envelopes/delete-envelope/CategoryName`

- Add funds to envelope: PUT `http://localhost:4000/manipulate-envelopes/add-money/CategoryName/AmountToAdd`
- Take funds from envelope: PUT `http://localhost:4000/manipulate-envelopes/deduce-money/CategoryName/AmountToTake`
- Transfer money from one envelope to another: PUT `http://localhost:4000/manipulate-envelopes/transfer-money/NameOfCategoryToTransferFrom/NameOfCategoryToTransferTo/AmountToTransfer`

## Technologies Used

- Node JS
- JavaScript
- Express.JS
- REST API
- Postman (For Testing)
