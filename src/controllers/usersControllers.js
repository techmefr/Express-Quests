const database = require("../../database");

const users = [
  {
    id: 1,
    firstname: "Jerome",
    name: "Ryan",
  },
  {
    id: 2,
    firstname: "Kristin",
    name: "Boyd",
  },
  {
    id: 3,
    firstname: "Joe",
    name: "Ramirez",
  },
];

const getUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database.query("SELECT * FROM users WHERE id = ?", [id]).then(([users]) => {
    if (users[0] != null) {
      res.json(users[0]);
    } else {
      res.sendStatus(404);
    }
  });
};

module.exports = {
  getUsers,
  getUsersById,
};
