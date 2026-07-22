Customer
---------
id
name
company
email
phone
preferredContact
address
notes
createdAt
updatedAt

Customer
 ├── Orders
 ├── Quotes
 ├── Payments
 └── Activity

 Order
-------
id
customerId
status
priority
dueDate
assignedPrinter
material
color
quantity
estimatedHours
notes

Printer
--------
id
name
model
status
currentJob
completionTime
nozzle
materialLoaded
maintenanceDue

Inventory
-----------
id
sku
category
name
color
material
quantity
minimumQuantity
location
supplier
cost

Quote
--------
id
customerId
price
expires
status
convertedToOrder

Payment
----------
id
orderId
amount
method
status
squareId

Activity
-----------
Customer Created

Order Started

Print Finished

Inventory Adjusted

Payment Received

Order Delivered
