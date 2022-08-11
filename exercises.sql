-- Challenge 1
Select DATE_FORMAT(MIN(created_at), '%W %D %Y') AS earliest_date from users;

-- Challenge 2
Select * from users
WHERE created_at = (
    Select MIN(created_at) from users
);

-- Challenge 3
Select MONTHNAME(created_at) AS month, count(*) as count
from users
GROUP BY month
order by count desc;

-- Challenge 4
SELECT count(*) as yahoo_users from users
WHERE email LIKE '%yahoo.com';

-- Challenge 5
SELECT
    CASE
        WHEN email LIKE '%gmail.com' THEN 'gmail'
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' then 'hotmail'
        ELSE 'other'
        end as provider,
    count(*) as total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;