-- 1. Load file
student_data = LOAD 'student.csv';

-- 2. Load with schema (comma separated fields)
student_data = LOAD 'student.csv'
    USING PigStorage(',') 
    AS (id:int, firstname:chararray, lastname:chararray, age:int, phone:chararray, city:chararray);

-- 3. Store relation into directory with delimiter “,”
STORE student_data INTO 'student_output' USING PigStorage(',');

-- 4. Display relation
DUMP student_data;

-- 5. Describe relation
DESCRIBE student_data;

-- 6. Group by age
group_age = GROUP student_data BY age;
DUMP group_age;

-- 7. Group by age and city
group_age_city = GROUP student_data BY (age, city);
DUMP group_age_city;

-- 8. Group by all columns
group_all = GROUP student_data BY (id, firstname, lastname, age, phone, city);
DUMP group_all;

-- 9. City wise average age
city_group = GROUP student_data BY city;
city_avg = FOREACH city_group GENERATE group AS city, AVG(student_data.age) AS avg_age;
DUMP city_avg;
