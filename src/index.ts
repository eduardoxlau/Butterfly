import express from "express";
import initDb from "./db/init";
import router from "./routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

initDb();
