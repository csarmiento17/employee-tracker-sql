DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;


CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  CONSTRAINT fk_role_id
    FOREIGN KEY (role_id)
    REFERENCES emp_role(id)
    ON DELETE SET NULL
);


CREATE TABLE emp_role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER
   CONSTRAINT fk_department_id
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(30) NOT NULL,
 
);
