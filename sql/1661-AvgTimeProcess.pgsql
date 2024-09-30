-- v1
select a1.machine_id, ROUND(CAST(AVG(a2.endTime - a1.startTime) AS numeric),3) as processing_time
from (
    select machine_id,process_id, timestamp as startTime 
    from Activity a1
    where a1.activity_type = 'start'
) a1
join (
    select machine_id,process_id, timestamp as endTime
    from Activity a2
    where a2.activity_type = 'end'
) a2
on a1.machine_id = a2.machine_id and a1.process_id = a2.process_id
group by a1.machine_id


--- v2
SELECT 
    a1.machine_id,
    ROUND(AVG(CAST(a2.timestamp - a1.timestamp AS DECIMAL)), 3) AS processing_time
FROM 
    activity a1
JOIN 
    activity a2 ON a1.machine_id = a2.machine_id 
                AND a1.process_id = a2.process_id
                AND a1.activity_type = 'start'
                AND a2.activity_type = 'end'
GROUP BY 
    a1.machine_id;