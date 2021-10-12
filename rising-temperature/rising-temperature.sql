# Write your MySQL query statement below

select w2.Id as Id
from weather w1, weather w2
where 
    DATEDIFF(w2.RecordDate, w1.RecordDate) = 1
and
    w2.Temperature > w1.Temperature

;
