const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, referral, inquiry, message } =
    req.body;

  const messageData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    referral: referral,
    inquiry: inquiry,
    message: message,
  };

  const newMessage = new schemas.Contact(messageData);

  const saveMessage = await newMessage.save();

  if (saveMessage) {
    res.send("Message sent. We will reach out to you in 3-5 business days");
  } else {
    res.send("Message was not sent. Please try again.");
  }

  res.end();
});

module.exports = router;
