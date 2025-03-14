const express = require("express");
const router = express.Router();
const Hierarchy = require("../models/Hierarchy");

const { v4: uuidv4 } = require("uuid");

//create a new object
router.post("/", async (req, res) => {
    try {
        const data = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ error: "Expected an array of objects" });
        }

        const newObjects = data.map(item => ({
            id: uuidv4(),
            name: item.name,
            level: item.level,
            parent: item.parent || null
        }));

        const savedObjects = await Hierarchy.insertMany(newObjects);

        res.status(201).json(savedObjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// fetch by level
router.get("/level=:level", async (req, res) => {
    try {
        const objects = await Hierarchy.find({ level: req.params.level });
        res.json(objects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// fetch by parent
router.get("/parent=:parent", async (req, res) => {
    try {
        const objects = await Hierarchy.find({ parent: req.params.parent });
        res.json(objects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Update an object
router.put("/:id", async (req, res) => {
    try {
        const updatedObject = await Hierarchy.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(updatedObject);
    } catch (error) {    
        res.status(500).json({ error: error.message });
    }
});

//Delete an object
router.delete("/:id", async (req, res) => {
    try {
        const deletedObject = await Hierarchy.findOneAndDelete({ id: req.params.id });
        res.json(deletedObject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Delete by name
router.delete("/name/:name", async (req, res) => {
    try {
        const deletedObject = await Hierarchy.findOneAndDelete({ name: req.params.name });
        res.json(deletedObject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
