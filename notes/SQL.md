# SQL

Based on the [SQL Top 50 Route](https://leetcode.com/studyplan/top-sql-50/) from [leetCode](https://leetcode.com).</br>
Using postgreSQL to solve the problems and [DB-Fiddle for postgreSQL](https://www.db-fiddle.com/) for free online testing of my queries.

## 1757 - Recyclable and Low Fat Products

* [Problem link](https://leetcode.com/problems/find-customer-referee/description)
* ✅[my PG-solution](../sql/1757-recyclable.pgsql)


## 584 - Find Customer Referee

* [Problem link](https://leetcode.com/problems/find-customer-referee/description)
* ✅[my PG-solution](../sql/584-findCustomerReferee.pgsql)


## 595 - Big Countries

* [Problem link](https://leetcode.com/problems/big-countries/description)
* ✅[my PG-solution](../sql/595-bigCountries.pgsql)

## 1148 - Article Views I

* [Problem link](https://leetcode.com/problems/article-views-i/description)
* ✅[my PG-solution](../sql/1148-articleViewsI.pgsql)

Note:

* make sure to return unique `author_id`s as `id` via `select distinct author_id as id`
* sort using `ORDER BY author_id ASC`

## 1683 - Invalid Tweets

* [Problem link](https://leetcode.com/problems/invalid-tweets/description/)
* ✅[my PG-solution](../sql/1683-invalidTweets.pgsql)

## 1378 - Replace Employee ID With The Unique Identifier

* [Problem link](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/1378-replaceId.pgsql)

## 1068 - Product Sales Analysis I

* [Problem link](https://leetcode.com/problems/product-sales-analysis-i/description)
* ✅[my PG-solution](../sql/1068-ProductSalesAnalysisI.pgsql)

## 1581 - Customer Who Visited but Did Not Make Any Transactions

* [Problem link](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/1581-CustWoTrans.pgsql)
* helpful read -> [PostgreSQL Group by Clause](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-group-by/) evaluates before having, select, ...

## 197 - Rising Temperature

* [Problem link](https://leetcode.com/problems/rising-temperature/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/197-RisingTemperature.pgsql)
* v1: use [LAG-function](https://www.postgresqltutorial.com/postgresql-window-function/postgresql-lag-function/) to access previous rows
* v2: but better subtract [interval](https://www.postgresql.org/docs/current/functions-datetime.html) and join shifted table back in

## 1661 - Average Time of Process per Machine

* [Problem link](https://leetcode.com/problems/average-time-of-process-per-machine/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/1661-AvgTimeProcess.pgsql)
* v1: nicely use `Round`-function (that needs numeric type, so use `Cast` as well); create two tables as subquerys
* v2: directly join table on itself -> simpler

## 577 - Employee Bonus

* [Problem link](https://leetcode.com/problems/employee-bonus/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/577-EmployeeBonus.pgsql)
* v1: trick = use `left join`

## 1280 - Students and Examinations

* [Problem link](https://leetcode.com/problems/students-and-examinations/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/1280-StudentsAndExaminations.pgsql)
* v4: make sure to join combining table `Examinations` on `Students.student_id` and `Subjects.subject_id` to not add a new row for every entry of `Examinations` for a single userID

## 570 - Managers with at Least 5 Direct Reports

* [Problem link](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/570-Managers5Reports.pgsql)
* trick: make sure to use unique entries/primary keys for counting -> here = Employee.id (to avoid useCase where same name appears twice with different Id (=different person))

## 1934 - Confirmation Rate

* [Problem link](https://leetcode.com/problems/confirmation-rate/description/?envType=study-plan-v2&envId=top-sql-50)
* ✅[my PG-solution](../sql/1934-ConfirmationRate.pgsql)
