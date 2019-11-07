# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT 
    p.productname as Product, 
    c.categoryname as Category
from products as p
join categories as c
on p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select 
    o.orderid as Id, 
    s.shippername as Shipper
from orders as o
join shippers as s
on o.shipperid = s.shipperid
where o.orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
select 
    p.productname as Product, 
    o.quantity
from orderdetails as o
join products as p
on o.productid = p.productid
where orderid = 10251
order by Product;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
select 
    o.orderid as [Order], 
    c.customername as Customer, 
    e.lastname as Employee
from orders as o
join customers as c
on o.customerid = c.customerid
join employees as e
on o.employeeid = e.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT 
    c.categoryname as Category, 
    count(p.productname) as [Number of Products]
FROM Categories as c
join products as p
on c.categoryid = p.categoryid
group by c.categoryname;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
select 
    o.orderid as [Order Id], 
    count(p.productname) as [Item Count]
from orderdetails as o
join products as p
on o.productid = p.productid
group by o.orderid;