const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const groupOrdersRoutes = require("./routes/groupOrders");
const vendorRoutes = require("./routes/vendors");

app.use("/api/group-orders", groupOrdersRoutes);
app.use("/api/vendors", vendorRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
