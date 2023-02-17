const express = require("express");
const router = express.Router();
const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const webToken = require("jsonwebtoken");
const nodemailer = require('nodemailer');
require("dotenv").config();
process.env.secret_key = 'secret'
//const { validationResult } = require('express-validator')
//const { validateConfirmpassword } = require('./validator')

// Register APi
router.post("/register", function (req, res) {
  const {firstname, lastname, email, password, confirmpassword, gender, dob, tel, city, state, country, roles}=req.body;
  if (
    firstname == undefined ||
    firstname == "" ||
    lastname == undefined ||
    lastname == "" ||
    email == undefined ||
    email == "" ||
    password == undefined ||
    password == "" ||
    confirmpassword == undefined ||
    confirmpassword == "" ||
    gender == undefined ||
    gender == "" ||
    dob == undefined ||
    dob == "" ||
    tel == undefined ||
    tel == "" ||
    city == undefined ||
    city == "" ||
    state == undefined ||
    state == "" ||
    country == undefined ||
    country == "" ||
    roles == undefined ||
    roles == ""
  ) {
    res.status(401).json({
      message: "Fill All Fields",
      status: res.statusCode,
    });
  } else if(password !== confirmpassword){
    res.status(401).json({
      message: "Passwords do not match",
      status: res.statusCode
    })
  }
  else {
    UserModel.findOne({
    // attributes: ["firstname"],
      where: {
        email,
      },
    }).then((value) => {
      if (value === null) {
        //HASH THE PASSWORD
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            // CRETAE RECORD IN DB
            UserModel.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hash,
                confirmpassword: hash,
                gender: gender,
                dob: dob,
                tel: tel, 
                city: city,
                state: state,
                country: country,
                roles: roles   
              })
              .then((value) => 
                res.status(201).json({
                  message: "Account Has Created Successfully",
                  status: res.statusCode,
                }) 
              )
              .catch((err) => 
                res.status(404).json({
                  message: "Something went wrong",
                  status: res.statusCode,
                }) 
              );
          });
        });
      } else {
        res.status(401).json({
          message: "Email already Taken",
          status: res.statusCode,
        });
      }
    });
  }
});

// Login API
router.post("/login", function (req, res) {
  const {
    password,
    email
  } = req.body;

  if (
    password == "" ||
    password == undefined ||
    email == "" ||
    email == undefined
  ) {
    res.status(401).json({
      message: "Fill All Fields",
      status: res.statusCode,
    });
  } else {
    // check mail in db or not

    UserModel.findOne({
      where: {
        email,
      },
    }).then((value) => {
      if (value === null) {
        res.status(401).json({
          message: "Email is not Registered Please SignUp",
          status: res.statusCode,
          token: ''
        });
      } else {
        // if mail is there check the password is correct or wrong
        const dbPassword = value.getDataValue("password");

        const userDetail = {
          name: value.getDataValue("firstname"),
          id: value.getDataValue("id"),
        };

        bcrypt.compare(password, dbPassword, function (err, result) {
          if (result) {
            const token = webToken.sign(userDetail, process.env.secret_key, {
              expiresIn: "60s",
            });
            res.status(200).json({
              message: "Logged In successfully",
              status: res.statusCode,
              token,
            });
          } else {
            res.status(401).json({
              message: "Invalid Crendential given",
              status: res.statusCode,
              token: ''
            })
          }
        });
      }
    });
  }
});

// get UserProfil API
router.get("/profile", function (req, res) {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.substr("Bearer".length + 1);

    webToken.verify(token, process.env.secret_key, (err, user) => {
      if (user) {
        return res
          .status(200)
          .json({
            status: res.statusCode,
            data: user,
            message: "success"
          });
      }
    res.status(401).json({
        status: res.statusCode,
        message: "please Login"
      });
    }); 
  } else {
    res.status(401).json({
      status: res.statusCode,
      message: "Please Login"
    });
  }
});

module.exports = router;