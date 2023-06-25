-- Active: 1687664042501@@127.0.0.1@5432@auto@public

-- CALL
    -- CALL see_user_perspectives(); --WON'T SHOW DATA IN PREVIEW EDITOR, BUT WILL VALIDATE WHETHER CALL EXECUTES OR NOT

--CREATE/REPLACE
    -- CREATE OR REPLACE PROCEDURE public.see_user_perspectives(username varchar(25))
    -- LANGUAGE sql
    -- AS $procedure$  --UNTESTED, FIND IN DBEAVER "Functions/procedure_name => Source Tab"
    SELECT u."userName" AS "USERNAME", q.quotation AS "QUOTATION", uqe.agreement AS "AGREEMENT"
    FROM public."user" u
    LEFT JOIN public.user_quote_eval uqe 
    ON uqe.user_id = u.id
    LEFT JOIN public."quote" q
    ON q.id = uqe.quote_id
    WHERE u."userName" = 'forHimAndHis'
    -- $procedure$ 


