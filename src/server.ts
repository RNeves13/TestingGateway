import express from 'express';
import cors from "cors";
import {json} from "body-parser";
import {router as Notifications} from "./routes/notifications/admin_notifications";

const app = express();

const port = process.env.PORT ?? 3000;


app.use(json());
app.use(cors());

app.use("/", Notifications);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});