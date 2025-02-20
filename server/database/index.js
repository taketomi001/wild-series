import "dotenv/config";

import mysql from "mysql2/promise";

// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const accessData = async () => {
  try {
    // Create a connection pool to the database
    const databaseClient = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });

    // Access data
    const results = await databaseClient.query("SELECT * FROM category");

    // Close the connection pool
    databaseClient.end();

    console.info(results);
  } catch (err) {
    console.error("Error accessing the database:", err.message, err.stack);
  }
};

// Run the accessData function
accessData();
