const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({
      HeaderData: {
        NavData: {
          LinkText: [
            "INICIO", "CONTACTO", "INFORMACION"
          ]
        }
      }
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });