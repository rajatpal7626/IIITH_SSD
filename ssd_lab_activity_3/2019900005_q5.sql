
select 	dpnd.Essn Manager_ssn,  
		dept1.dnum Dept_num , 
        count(* ) Num_of_Dept  
from DEPENDENT dpnd
inner join
(
	select 	dept.DName dname, 
			dept.Dnumber dnum , 
            dept.Mgr_ssn Mgr_ssn 
	from DEPARTMENT dept
	inner join 
	(
		select 	Dnumber, 
				count(Dlocation) lcount 
		from DEPT_LOCATIONS
		group by Dnumber 
        having lcount >= 2
	)  dloc
	on dept.DNumber= dloc.Dnumber
) dept1
on dpnd.Essn=dept1.Mgr_ssn
group by Manager_ssn,Dept_num;