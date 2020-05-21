import opine from "../../mod.ts";
import APIv1 from "./controllers/APIv1.ts";
import APIv2 from "./controllers/APIv2.ts";

const app = opine();

app.use("/api/v1", APIv1);
app.use("/api/v2", APIv2);

app.get("/", function (_req, res) {
  res.send("Hello from root route.");
});

app.listen({ port: 3000 });
console.log("Opine started on port 3000");
