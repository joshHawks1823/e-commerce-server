const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

const destinationDir = path.join(__dirname, "../e-commerce/dist/e-commerce");

//hosting from dist folder
app.use(express.static(destinationDir));
console.log(`express hosting from ${destinationDir}`);

// Serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(destinationDir, "index.html"));
});
console.log(`serving index.html`);

// initialize app and listen to port
app.listen(port, () => console.log(`server is running from port ${port}`));
