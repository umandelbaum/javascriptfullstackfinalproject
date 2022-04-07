# MyStore

This is a simple front end for a single-page web store.  The index page is a list of products for sale.  Clicking on a product image shows a page with more detail.  Products can be added to a shopping cart from either of these pages.

Clicking the cart link from the navigation bar will bring the user to the shopping cart page.  If the cart is empty, then nothing will appear.  When an item is in the cart, this page allows the user to increase or decreases the number of items in the cart.  If an item decreases to 0 (or less) then it is removed from the cart.

The shopping cart also allows the user to enter their name, address, and credit card number.  Once valid entries are input, the user can confirm the order.  That will take them to a confirmation page declaring success.

## Starting the server

Run`npm i` to install dependencies.

Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. 