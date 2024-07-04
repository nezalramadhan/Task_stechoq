const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { id, title, description, completed } = req.body;
  try {
    const task = await Task.create({
      id,
      title,
      description,
      completed,
    });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const task = await Task.findAll();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.update({ title, description, completed });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Menghapus produk berdasarkan ID
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();
    res.json({ message: "Task has been successfully deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
