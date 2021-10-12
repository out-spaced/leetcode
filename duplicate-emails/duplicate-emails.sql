# Write your MySQL query statement below
select distinct
    tbl2.Email
from
    Person
as tbl1
join
    Person 
as tbl2
on 
    tbl1.Id != tbl2.Id
and
    tbl1.Email = tbl2.Email
;