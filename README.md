# E-Commerce Database 
### **Team:** 

Klaida Azizi, Patrick Etka

### **Description:** 

Our database implements an e-commerce application with the following tables representing the pieces of a seller/customer interaction.

### **Tables:**

**Users:** This table holds the main information for the two user data models and acts as the parent to   the sellers and customers tables.

**Sellers:** This table holds information about the sellers of products.

**Customers:** This table holds information about the customers purchasing products

**Follows:** This table implements the many to many relationship between sellers and customers. Sellers can follow many customers and customers can follow many sellers.

**Products:** The products table holds the information for products that are sold by sellers.  Each product can have a discount, which is represented with a foreign key to the discount table.  There is also a many to many relationship between products and carts, which is implemented using the orders table.

**Carts:** The carts table is related to the customers table.  Each customer can have many carts, but each cart only has one customer.  Each cart can have many products within it.

**Orders:** Implements the many to many relationship between carts and products.  Maps the two tables to each other and also includes other fields related to the order status, quantity, etc.

**Discounts:** The discounts table holds information about specific discounts/promotions being run.  Discounts are related to products through a foriegn key to the discounts table within the products table.

**Categories:** This is an enum table and lists the categories that a product can fall under.

**Payment Types:** This is an enum table and lists the types of ways a customer can pay for their cart.
