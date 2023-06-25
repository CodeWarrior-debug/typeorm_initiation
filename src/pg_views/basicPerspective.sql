-- Active: 1687664042501@@127.0.0.1@5432@auto@public

SELECT u."userName" AS "USERNAME", q.quotation AS "QUOTATION", uqe.agreement AS "AGREEMENT"
FROM public."user" u
LEFT JOIN public.user_quote_eval uqe 
ON uqe.user_id = u.id
LEFT JOIN public."quote" q
ON q.id = uqe.quote_id
ORDER BY u."userName", q.quotation