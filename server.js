const express = require('express');

const app = express();

app.use(express.static('./src//app/app.component.html'));

app.get('/*', function (req, res) {
  res.sendFile('app.component.html', { root: 'src//app/app.component.html' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)