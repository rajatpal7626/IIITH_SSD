
select 	manager.Manager_name, 
		manager.Manager_Ssn , 
		dept.dnumber, 
        manager.Num_of_employee 
from DEPARTMENT dept
inner join 
(	select concat(mgr.Fname, " ", mgr.Minit , " " , mgr.Lname) Manager_name, 
		mgr.Ssn Manager_Ssn, 
        count(*) Num_of_employee
	from EMPLOYEE emp
	inner join EMPLOYEE mgr
	on emp.Super_ssn=mgr.Ssn
	group by Manager_Ssn , Manager_Ssn
) manager
on dept.mgr_Ssn = manager.Manager_Ssn
order by Num_of_employee;

