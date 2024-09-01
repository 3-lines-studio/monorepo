import { serve } from "@hono/node-server";
import { environment } from "config/environment.js";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text(JSON.stringify(environment)));

serve({
  fetch: app.fetch,
  hostname: "0.0.0.0",
  port: 3000,
});

console.log("Started @ http://localhost:3000");
