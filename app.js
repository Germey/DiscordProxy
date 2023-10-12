const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Routes
app.get(`/`, (req, res) => {
  res.json({
    status: "OK",
  });
});

// Reverse proxy
app.use(
  "/attachments/",
  createProxyMiddleware({
    target: "https://cdn.discordapp.com",
    changeOrigin: true,
    pathRewrite: {
      "^/attachments/": "/attachments/",
    },
  })
);

app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
});
