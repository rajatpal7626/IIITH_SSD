DELIMITER $$
Drop PROCEDURE if exists adder;
Create PROCEDURE adder (IN num1 int, IN num2 int)
begin
	select num1+num2 from dual;
end$$

-- CALL adder(5, 6);
