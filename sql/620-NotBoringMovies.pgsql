-- Write your PostgreSQL query statement below
select id, movie, description, rating
from Cinema
where not description='boring' and mod(id+1,2)=0
order by rating desc;