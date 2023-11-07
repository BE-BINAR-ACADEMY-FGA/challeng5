const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require("./routes/route");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

dotenv.config();

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Challenge 5",
      version: "1.0.0",
      description: "Challenge 5",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
      {
        url: "http://localhost:8080/api/v1",
      },
    ],
  },
  apis: ["./src/routes/*route.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get("/", (req, res) => {
  res.send("Challenge 5");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
