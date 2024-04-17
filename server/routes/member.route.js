const express = require("express");
const router = express.Router();
const {
  createMember,
  getMembers,
  updateMember,
  deleteMember,
} = require("../controllers/member.controller");

// Create a new member
router.post("/", async (req, res) => {
  try {
    const member = await createMember(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all members
router.get("/", async (req, res) => {
  try {
    const members = await getMembers();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a member
router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await updateMember(req.params.id, req.body);
    res.json(updatedMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a member
router.delete("/:id", async (req, res) => {
  try {
    const deletedMember = await deleteMember(req.params.id);
    res.json(deletedMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
