# HTML-and-Data-base-project
Algorithm:

Step 0: START

Step 1: User will register to the app if he new to the app or else he will login using the  existing account details.
The details are stored in the data base in the table ‘useridd’ having columns as shown below, 
                                            NAME EMAIL MOBILENUM PASSWORD CPASSWORD
                                            
Step 2: Then the page is redirected to the Home page

Step 3: From there user can go through the Vegetables, Fruits, Legumes and Spices Section where he/she can choose the products that he willing to buy.

Step 4: To pick up a product user needs to click ‘Add to cart’ button then the product is  added to cart.

Step 5: Cart will display the details regarding the particular product like product name, image quantity, price, and total amount of the product(s).

Step 6: User can add (or) delete an item(s) or even whole cart items at once in the web page. The details of the product will be store in the Web Storage API 
{A subfolder Located at \AppData\Local\Google\Chrome\User Data\Default\Local Storage} in which enables the browsers to the key value pairs (represents storage objects).

Step 7: After the desired products are added to cart user will be asked to choose the payment method

❖ Cash On Delivery (COD)
❖ Online Payment
  
Step 8: User can fill the details of billing address and Bank details Based on the mode of  payment that he/she chosen. These details are stored in the data base in the table
‘billingadd’ having columns
          STATE CITY ZIPCODE STREET1 STREET2 EMAIL FNAME LNAME CNUMBER EXP CVV
          
Step 9: After the Proceed Payment Button is clicked the Order is placed, redirected to the Thank you page and the Order is placed successfully.

Step 10: STOP
