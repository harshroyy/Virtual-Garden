const express = require("express");
const router = express.Router();
const Herb = require("../models/herb"); // Import the Herb model

// Add herb - admin
router.post("/add-herb", async (req, res) => {
  try {
    // Admin check logic should be implemented if needed

    const herb = new Herb({
      images: req.body.images,
      description: req.body.description,
      botanicalName: req.body.botanicalName,
      commonNames: req.body.commonNames,
      habitat: req.body.habitat,
      medicinalUses: req.body.medicinalUses,
      cultivation: req.body.cultivation,
    });
    await herb.save();
    res.status(200).json({ message: "Herb added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update herb - admin
router.put("/update-herb", async (req, res) => {
  try {
    const { herbid } = req.headers;
    await Herb.findByIdAndUpdate(herbid, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ message: "Herb updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete herb - admin
router.delete("/delete-herb", async (req, res) => {
  try {
    const { herbid } = req.headers;
    await Herb.findByIdAndDelete(herbid);

    res.status(200).json({ message: "Herb deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all herbs - public
router.get("/get-all-herbs", async (req, res) => {
  try {
    const herbs = await Herb.find().sort({ createdAt: -1 });

    return res.json({ status: "Success", data: herbs });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get recently added herbs, limit 4 - public
router.get("/get-recent-herbs", async (req, res) => {
  try {
    const herbs = await Herb.find().sort({ createdAt: -1 }).limit(4);

    return res.json({ status: "Success", data: herbs });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get herb by id - public
router.get("/get-herb-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const herb = await Herb.findById(id);
    return res.json({ status: "Success", data: herb });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
