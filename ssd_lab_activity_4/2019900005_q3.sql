DELIMITER $$
Drop PROCEDURE if exists CustomerInfoWithAmount;
Create PROCEDURE CustomerInfoWithAmount(IN totalAmount Int)
begin
	select CUST_NAME, GRADE from customer where OPENING_AMT+RECEIVE_AMT > totalAmount;
end$$


-- CALL CustomerInfoWithAmount(10000);