const express = require("express");
const {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");
const router = express.Router();

// Rute untuk fitur barang masuk
router.get("/tasks", getAllTask);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
