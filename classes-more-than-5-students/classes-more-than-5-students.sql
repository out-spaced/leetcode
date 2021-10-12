# Write your MySQL query statement below

select class
from (
    select class, count(class) as num
    from (
        select distinct student, class
        from courses
    ) as y
    group by class
) as x
where num > 4;