 SELECT 
    s.user_id,
    COALESCE(
        ROUND(
            COUNT(CASE WHEN c.action = 'confirmed' THEN 1 END)::decimal / NULLIF(COUNT(c.action), 0), 
            2
        ),
        0
    ) AS confirmation_rate
FROM 
    Signups s
LEFT JOIN 
    confirmations c ON s.user_id = c.user_id
GROUP BY 
    s.user_id;