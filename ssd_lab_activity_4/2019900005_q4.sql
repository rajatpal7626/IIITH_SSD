DELIMITER $$
CREATE PROCEDURE CustomerAgentCodeA00()
   BEGIN
      declare agentCode nvarchar(35);
      declare customerName nvarchar(40);
      declare customerCity nvarchar(35);
      declare customerCountry nvarchar(20);
      declare customerGrade VARCHAR(20);
      
      declare cur CURSOR FOR 
      SELECT CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE 
      FROM customer 
      where AGENT_CODE like "A00%";
      
      OPEN cur;
      LOOP
		FETCH cur INTO customerName, customerCity, customerCountry, customerGrade;
      END LOOP;
      CLOSE cur;
   END$$