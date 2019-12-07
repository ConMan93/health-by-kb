INSERT INTO posts (date, imageurl, video, message, page, title)
VALUES (${date}, ${imageurl}, ${video}, ${message}, ${page}, ${title})
RETURNING *;