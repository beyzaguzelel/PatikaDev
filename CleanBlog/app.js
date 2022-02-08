const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const Post = require('./models/Post');


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',{
  methods:['POST','GET']
}));

//Template Engine
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/',postController.getAllPosts );
app.get('/posts/:id',postController.getPost );

app.post('/add_post',postController.createPost );

app.put('/posts/:id',postController.updatePost );

app.delete('/posts/:id',postController.deletePost );

app.get('/posts/edit/:id', pageController.getEditPage);
app.get("/about",pageController.getAboutPage);
app.get("/add_post",pageController.getAddPage);
  

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});