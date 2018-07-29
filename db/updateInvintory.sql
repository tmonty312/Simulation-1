update invintory 
SET location = $1, price = $2, image_id = $3
WHERE id = $4;

SELECT * FROM invintory;