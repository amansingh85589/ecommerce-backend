import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
    tags: [
      { name: "Auth" },
      { name: "Products" },
      { name: "Cart" },
      { name: "Order" },
      { name: "Address" }
    ]
  },

  // 🔥 FIX IS HERE
  apis: ["./routes/*.js", "./routes/**/*.js"],

};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;