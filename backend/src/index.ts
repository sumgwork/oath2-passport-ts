import express from "express";
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("HELLOOO");
});

app.listen(4000, () => {
  console.log("Server started");
});
