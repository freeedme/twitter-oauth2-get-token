import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
