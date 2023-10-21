const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  referral: { type: String, required: true },
  inquiry: { type: String, required: true },
  message: { type: String, required: true },
  entryData: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema, "contact");

const mySchemas = { "Contact": Contact };

module.exports = mySchemas;
