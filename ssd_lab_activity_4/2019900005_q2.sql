DELIMITER $$
Drop PROCEDURE if exists CustomerInBanglore;
Create PROCEDURE CustomerInBanglore(IN city nvarchar(30))
begin
	select * from customer where lower(WORKING_AREA)=lower(city);
end$$

-- CALL CustomerInBanglore('Bangalore');