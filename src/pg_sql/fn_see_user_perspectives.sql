-- Active: 1687664042501@@127.0.0.1@5432@auto@public


--CREATE/REPLACE THE FUNCTION
    CREATE OR REPLACE FUNCTION increment(i integer) RETURNS integer AS $$
            BEGIN
                    RETURN i + 1;
            END;
    $$ LANGUAGE plpgsql;
-- EXECUTE THE FUNCTION
    SELECT increment(5);

//TODO --HOW TO RETURN AN ARRAY/JSON FROM A FUNCTION