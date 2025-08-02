const pool = require("../db/config");

const getAllPersons = async (req, res) => {
  try {
    const result = await pool.query("Select * from person");
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addPerson = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      gender,
      date_of_birth,
      country_of_birth,
    } = req.body;
    const result = await pool.query(
      "INSERT INTO person (first_name, last_name, email, gender, date_of_birth, country_of_birth) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [first_name, last_name, email, gender, date_of_birth, country_of_birth]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding person:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAPerson = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT * FROM person WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching person:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAPerson = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      first_name,
      last_name,
      email,
      gender,
      date_of_birth,
      country_of_birth,
    } = req.body;
    const result = await pool.query(
      "UPDATE person SET first_name = $1, last_name = $2, email = $3, gender = $4, date_of_birth = $5, country_of_birth = $6 WHERE id = $7 RETURNING *",
      [first_name, last_name, email, gender, date_of_birth, country_of_birth, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteAPerson = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query("DELETE FROM person WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Person not found" });
            }
         res.status(200).json({ message: "Person deleted successfully" });
         } catch (error) {
             console.error("Error deleting person:", error);
             res.status(500).json({ error: "Internal Server Error" });
             }
  }

const getbyLimit = async (req, res) => {
  try {
    const limit = req.query.limit;
    const page = req.query.page;
    const offset = (page - 1) * limit;
    const result = await pool.query( "SELECT * FROM person LIMIT $1 OFFSET $2", [limit, offset] );
    res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error getting person by limit:", error);
      res.status(500).json({ error: "Internal Server Error" });
      }
}
const getbirthDayMonth = async (req, res) => {
  console.log(req.query, "reqqqq");
  
  try {
    const birthdayMonth = req.query.birthdayMonth;
    console.log(birthdayMonth, "birthdayMonth");
    
    const result = await pool.query("SELECT * FROM person WHERE EXTRACT(MONTH FROM date_of_birth) = $1", [birthdayMonth]);
    res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error getting person by birthday month:", error);
      res.status(500).json({ error: "Internal Server Error" });
      }
    }

module.exports = { getAllPersons, addPerson, getAPerson, updateAPerson, deleteAPerson, getbyLimit, getbirthDayMonth };
