const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/addUser', (req, res) => {
  const { userid, namalengkap, username, password, status } = req.body;
  const query =
    'INSERT INTO users (userid, namalengkap, username, password, status) VALUES (?, ?, ?, ?, ?)';
  db.query(
    query,
    [userid, namalengkap, username, password, status],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error adding user');
      } else {
        res.send('User added successfully');
      }
    }
  );
});

router.get('/getUsers', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching users');
    } else {
      res.send(result);
    }
  });
});

router.put('/updateUser/:id', (req, res) => {
  const { namalengkap, username, password, status } = req.body;
  const id = req.params.id;
  const query = `UPDATE users SET namalengkap=?, username=?, password=?, status=? WHERE userid=${id}`;
  console.log(query);
  db.query(query, [namalengkap, username, password, status], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating user');
    } else {
      res.send('User updated successfully');
    }
  });
});

router.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM users WHERE userid=?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting user');
    } else {
      res.send('User deleted successfully');
    }
  });
});

module.exports = router;
