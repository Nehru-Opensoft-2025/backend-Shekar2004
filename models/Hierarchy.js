const mongoose = require("mongoose");

const hierarchySchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    level: { type: Number, required: true },
    parent: { type: String, default: null }
});

const Hierarchy = mongoose.model("Hierarchy", hierarchySchema);
module.exports = Hierarchy;