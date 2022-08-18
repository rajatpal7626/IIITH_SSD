

select 	concat(emp.Fname, " ", emp.Minit , " " , emp.Lname) FULL_NAME  , 
		emp.Ssn,dept.Dnumber, 
        dept.Dname 
from COMPANY.EMPLOYEE emp 
inner join
	COMPANY.DEPARTMENT dept
on emp.Dno = dept.Dnumber
where emp.Ssn in (
	select emp.Super_ssn from EMPLOYEE emp where emp.Ssn in (
		select Essn from (
			select workson.Essn Essn, sum(workson.Hours) as workhours 
			from COMPANY.WORKS_ON workson  
			group by Essn 
			having workhours < 40 
		)  as wn 
	)
);

