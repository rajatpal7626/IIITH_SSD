const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

const salt = 10;

router.post("/signin", (req, res, next) => {
  const { rollno, password, role } = req.body;
  User.findOne({ rollno: rollno, role: role })
    .then((userDocument) => {
      if (!userDocument) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      req.session.currentUser = {
         role: "userDocument.role",  // if you need to handle roles
        _id: userDocument._id,
      };

      res.redirect("/api/query/");
    })
    .catch(next);
});

router.post("/signup", (req, res, next) => {
  const { rollno, password,role } = req.body;

  User.findOne({ rollno: rollno, role: role })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "User already exists." });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = { rollno, role, password: hashedPassword };

      User.create(newUser)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(next);
    })
    .catch(next);
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) next(error);
    else res.status(200).json({ message: "Succesfully disconnected." });
  });
});

module.exports = router;
