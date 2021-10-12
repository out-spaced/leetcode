# Write your MySQL query statement below
delete 
from person
where Id in (
    select Id
    from (
        select tbl1.Id as tbl1id, tbl1.Email as tbl1em, tbl2.Id, tbl2.Email
        from Person as tbl1
        inner join
        Person as tbl2
        where tbl1.Id < tbl2.Id
        and 
        tbl1.Email = tbl2.Email
    ) as x
)
;