const express = require('express');

const app = express();

app.use(express.static('./src//app/'));

app.get('/*', function (req, res) {
  res.sendFile('app.component.html', { root: 'src/app/' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)