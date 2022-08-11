CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP Default NOW()
);

INSERT INTO users (email) VALUES
('Katie34@yahoo.com'), ('Tunde@gmail.com');

INSERT INTO users (email, created_at) VALUES('dusty@gmail.com', '2021-08-13T17:28:33.589Z');



