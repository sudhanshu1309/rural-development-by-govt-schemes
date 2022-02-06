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
    name VARCHAR(100)
);


INSERT INTO dbauser (
    name, email, password, role
) VALUES (
    'Sudhanshu Tripathi', 'sudhanshu@gmail.com', '123456789', 1
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    101, 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    102, 'Swarnjayanti Gram Swarozgar Yojana (SGSY)/ National Rural Livelihood Mission'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    103, 'Prime Minister Rural Development Fellows Scheme'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    104, 'National Rural Employment Guarantee Act (NREGA)'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    105, 'Sampoorna Grameen Rozgar Yojana (SGRY)'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    106, 'Sarv Siksha Abhiyan'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    107, 'National Social Assistance Programme'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    108, 'Pradhan Mantri Awaas Yojana (Gramin)/ Indira Awas Yojana'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    109, 'Antyodaya Anna Yojana (AAY)'
);

INSERT INTO govt_schemes (
    id, name
) VALUES (
    110, 'Provision of Urban Amenities In Rural Areas (PURA)'
);


DROP TABLE govt_schemes;