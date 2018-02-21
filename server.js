const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./Server/controller');

const app = express();
app.use(express.static(__dirname + '/Build'));
// app.set('views', __dirname + '/Build');
// app.set('view engine', 'ejs');
// app.set('view engine', 'ejs');
// app.set('view engine', 'html');
// app.set('views', './../Build');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

//post new photo
app.post('/photo', controller.postPhoto);

//arrow clicked
app.post('/photo-change', controller.changePhotos);

//like button clicked
app.post('/like', controller.updateLikes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('hellooooooo');
});

module.exports = app;

