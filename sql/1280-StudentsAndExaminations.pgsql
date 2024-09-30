-- v1 -- not working
select st.student_id, st.student_name, su.subject_name, count(st.student_id) as attended_exams
from Students st
full outer join Examinations ex on st.student_id = ex.student_id
full outer join Subjects su on ex.subject_name = su.subject_name
group by (st.student_id, st.student_name, su.subject_name)


-- v2 -- not working
WITH combined AS (
    SELECT *
    FROM Students st
    CROSS JOIN Subjects su
)
select c.student_id, c.student_name, c.subject_name, count(c.subject_name)
from combined c
left join Examinations ex on c.student_id = ex.student_id
group by(c.student_id, c.student_name, c.subject_name)


-- v3 -- not working
WITH ExaminationsCounted AS (
    SELECT ex.student_id, ex.subject_name, count(*) as attended_exams
    FROM Examinations ex
    group by (ex.student_id,ex.subject_name)
)
select st.student_id, st.student_name, su.subject_name, ec.attended_exams
from Students st
cross join Subjects su
left join ExaminationsCounted ec on st.student_id = ec.student_id

-- v4
select st.student_id, st.student_name, su.subject_name, Count(ex.student_id) as attended_exams
from Students st
cross join Subjects su
left join Examinations ex on st.student_id = ec.student_id and su.subject_name = ex.subject_name
group by (st.student_id, st.student_name, su.subject_name)
