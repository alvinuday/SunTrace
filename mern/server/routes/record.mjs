import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("records");
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  try {
    const collection = await db.collection("records");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    const newDocument = req.body;

    if (!newDocument || !newDocument.General_Information.id) {
      return res.status(400).json({ message: "Invalid or missing ID in request body" });
    }

    const collection = await db.collection("records");

    const existingRecord = await collection.findOne({ id: newDocument.General_Information.id });

    if (existingRecord) {
      return res.status(409).json({ message: "Record with this ID already exists" });
    }

    const result = await collection.insertOne(newDocument);

    if (result && result.insertedId) {
      res.send(result).status(201).json({ message: "Record created successfully" });
    } else {
      console.error("Failed to create record or no data returned", result);
      res.status(500).json({ message: "Failed to create record or no data returned" });
    }
  } catch (err) {
    console.error("Error creating record:", err);
    res.status(400).json({ message: err.message });
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = { $set: req.body };

    const collection = await db.collection("records");
    const result = await collection.updateOne(query, updates);

    if (result.modifiedCount === 0) {
      res.status(404).json({ message: "Record not found" });
    } else {
      res.status(200).json({ message: "Record updated successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = await db.collection("records");
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Record not found" });
    } else {
      res.status(200).json({ message: "Record deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Route to delete all records
router.delete("/", async (req, res) => {
  try {
    const collection = await db.collection("records");
    const result = await collection.deleteMany({});

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "No records found to delete" });
    } else {
      res.status(200).json({ message: "All records deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default router;
