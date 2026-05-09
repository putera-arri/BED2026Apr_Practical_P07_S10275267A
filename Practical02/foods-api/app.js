const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());



app.post("/foods", (req, res) => {
  const { name, calories } = req.body;
  if (!name || calories == null) {
    return res
      .status(400)
      .json({ message: "Cannot create food: name and calories are required." });
  }
  const newFood = { id: Date.now(), name, calories };
  foods.push(newFood);
  res
    .status(201)
    .json({ message: "Food created successfully.", food: newFood });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});