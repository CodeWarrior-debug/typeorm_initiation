-- Active: 1687664042501@@127.0.0.1@5432@auto@public


--CREATE/REPLACE 
    CREATE OR REPLACE FUNCTION increment(i integer) RETURNS integer AS $$
            BEGIN
                    RETURN i + 1;
            END;
    $$ LANGUAGE plpgsql;
-- CALL
    SELECT increment(5);