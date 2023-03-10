import express from "express";
import { expressExtend } from "jsxte";
import path from "path";
import { NotFoundRoute } from "./endpoints/not-found.route";
import { TodoRouter } from "./endpoints/todo/todo.route";
import { PublicRouter } from "./public.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

expressExtend(app);
app.set("views", path.resolve(__dirname, "views"));

app.use("/", TodoRouter);
app.use("/public", PublicRouter);

app.use(NotFoundRoute);

app.listen(8080, () => {
  console.log("Server started:\nhttp://localhost:8080");
});
