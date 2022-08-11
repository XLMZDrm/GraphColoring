import express from "express";
import router from "./route/web.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
  console.log(`OK: ${PORT}`);
});
