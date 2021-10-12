# Write your MySQL query statement below
select 
    Name as Employee
from(
    select
        empl.Name, empl.Salary, man.Salary as ManSalary
    from
        Employee
    as empl
    left join 
        Employee
    as man
    on 
        empl.ManagerId = man.id
) as x
where
    (Salary > ManSalary)
;