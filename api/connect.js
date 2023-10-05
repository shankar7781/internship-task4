import mysql from "mysql"

export const db = mysql.createConnection({
  host:"database-1.cj1xvgzwobrq.ap-south-1.rds.amazonaws.com",
  user:"root",
  password:"Shankar#",
  database:"social"
})
