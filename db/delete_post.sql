DELETE
FROM posts
WHERE id = $1;

SELECT *
FROM posts
WHERE page = $2
ORDER BY id DESC;