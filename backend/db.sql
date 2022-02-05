CREATE TABLE dbauser (
    sno SERIAL,
    name VARCHAR(32),
    email VARCHAR(32),
    password VARCHAR(32),
    role NUMERIC
);


CREATE TABLE people (
    sno SERIAL,
    aadhar NUMERIC(12) PRIMARY KEY,
    name VARCHAR(32),
    dob DATE,
    gender VARCHAR(1),
    spouse_name VARCHAR(32),
    no_of_children NUMERIC,
    annual_income NUMERIC,
    mob_no NUMERIC(10),
    email VARCHAR(32),
    address VARCHAR(32),
    schemes_enrolled NUMERIC[]
);

CREATE TABLE govt_schemes (
    sno SERIAL,
    id NUMERIC PRIMARY KEY,
    name VARCHAR(32)
);


INSERT INTO dbauser (
    name, email, password, role
) VALUES (
    'Sudhanshu Tripathi', 'sudhanshu@gmail.com', '123456789', 1
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    101, 'test1'
);