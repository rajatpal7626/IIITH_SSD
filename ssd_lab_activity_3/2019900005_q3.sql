

select 	Essn manager_ssn, 
		count(*) Project_count 
from WORKS_ON 
where Essn in (
	select Mgr_ssn 
    from DEPARTMENT 
    where Dnumber in (
		select Dnum 
        from PROJECT 
        where pname='ProductY'
	)
)
group by Essn;



