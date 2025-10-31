// Step 1: Import json-server
const jsonServer = require("json-server");

// Step 2: Create an instance of jsonServer
const server = jsonServer.create();

// Step 3: Create middleware
const middleware = jsonServer.defaults();

// Step 4: Create router and specify your db.json file
const router = jsonServer.router("db.json");

// Step 5: Use middleware and router
server.use(middleware);
server.use("/api", router); // 👈 Adds /api prefix (good practice)

// Step 6: Define Port (put process.env.PORT first)
const PORT = process.env.PORT || 3000;

// Step 7: Start the server
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
