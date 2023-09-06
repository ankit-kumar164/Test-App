import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import path from "path";

const PORT = process.env.CYCLIC_URL||3000;
const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use("/record", records);

app.use(express.static(path.join(__dirname, "./client/build")))
app.get('*',function(_,res){
  res.sendFile(path.join(__dirname, "./client/build/index.html"),function(err){
    res.status(500).send(err);
  })}
);
// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
