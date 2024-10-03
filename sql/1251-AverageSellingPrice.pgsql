-- Write your PostgreSQL query statement below
select
    p.product_id,
    COALESCE(Round(sum(p.price*u.units) *1.0/nullif(sum(u.units),0),2),0) as average_price
from Prices p
left join UnitsSold u
on p.product_id = u.product_id and u.purchase_date >= p.start_date and u.purchase_date <=p.end_date
group by p.product_id