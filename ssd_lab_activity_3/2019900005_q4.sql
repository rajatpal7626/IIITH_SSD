
select 	dloc.DNumber, 
		dept1.DName, 
        count(dloc.Dnumber) num_location
from DEPT_LOCATIONS dloc
inner join 
(
	select 	dept.Dnumber , 
			dept.Dname , 
            dpnd.f_count  
	from DEPARTMENT dept
	inner join 
	(
		select 	Essn, 
				count(*) f_count 
		from DEPENDENT 
		where Sex='F'
		group by Essn 
        having f_count >=2
	) dpnd
	on dept.Mgr_ssn=dpnd.Essn
) dept1
on  dloc.Dnumber=dept1.Dnumber
group by dloc.Dnumber;

