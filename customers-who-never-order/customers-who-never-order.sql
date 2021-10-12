# Write your MySQL query statement below

select
    x.Name as Customers
from(
    select 
        Customers.Id as custId, Customers.Name, Orders.CustomerId
    from 
        Customers
    left join
        Orders
    on 
        Customers.Id = Orders.CustomerId
) as x
where
    ISNULL(x.CustomerId)
;