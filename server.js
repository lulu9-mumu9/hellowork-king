// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/time', (req, res) => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  res.json({
    serverTime: now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate())+' '+pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds()),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
});
app.listen(PORT, () => {
  console.log('HelloWorld running at http://localhost:' + PORT);
});
