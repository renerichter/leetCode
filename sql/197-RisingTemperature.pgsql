-- v1
select id
from (
    select id, temperature, LAG(temperature) over (order by recordDate) as prev_temp,recordDate, LAG(recordDate) over (order by recordDate) as prev_date from Weather w
) subquery
where temperature > prev_temp and recordDate = prev_date + interval '1 day'


-- v2 -> twice as fast!!
select w2.id 
from Weather w1 
join Weather w2 on w1.recordDate = w2.recordDate - interval '1 day'
where w2.temperature > w1.temperature