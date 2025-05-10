// server.js
const express = require('express');
const path    = require('path');
const app     = express();

// 1️⃣ Point this at your dist output
const distFolder = path.join(__dirname, 'dist/pronto-valuation-frontend');
// (if you renamed your app, adjust the folder name accordingly)

app.use(express.static(distFolder));

// 2️⃣ All unmatched routes should return index.html so Angular routing works
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// 3️⃣ Listen on the port Azure gives us (defaults to 8080)
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Pronto FE listening on port ${port}`);
});
