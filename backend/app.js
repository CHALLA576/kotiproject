const express = require("express")
const mongoose = require('mongoose')
const User = require("./model/user")
const User2 =require("./feedback/data")
var imgSchema = require("./Imagescema.js");
var fs = require('fs');
var path = require('path');
var cors = require('cors')

require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connected"))



var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

// API endpoint to fetch all images
app.get('/api/images', (req, res) => {
    imgSchema.find({})
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch images" });
    });
});

app.post('/api/upload', upload.single('image'), (req, res, next) => {
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then(item => {
        res.json({ success: true, message: "Image uploaded successfully" });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Failed to upload image" });
    });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route to return the React app for unknown requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

















app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email})
    .then((response)=>{
        if(response.password === req.body.password){
            res.send({message:"login sucssfully", status :200})
        }
        else{
            res.send({message:"passwoed wrong"})
        }
    })
    .catch(()=>{
        res.send({message:"user not found"})
        
        
    })

})

app.post(('/register'), async(req,res)=>{
    User.findOne({email:req.body.email})
    .then((response)=>{
        if(response){
            res.send({message:"email alredy existed"})
        }
        else{
            let data  =  new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                phonno:req.body.phonno

            })
            data.save()
            .then(()=>{
                res.send({message:"register sucssfully"})
            })
            .catch(()=>{
                res.send({message:"registernot possible at the mommnet"})
            })
        }
    })
})

app.post(('/feedback'), async(req,res)=>{
    User2.findOne({email:req.body.email})
    .then((response)=>{
        if(response){
            res.send({message:" email is already used"})
        }
        else{
            let newscema = new User2({
                name:req.body.name,
                email:req.body.email,
                feedback:req.body.feedback,
                phonNo:req.body.phonNo

            })
            newscema.save()
            .then(()=>{
                res.send({message:"we got your feedback"})
            })
            .catch(()=>{
                res.send({message:"try some else"})
            })
        }
    })

})



var port = process.env.PORT || '5000';
app.listen(port, err => {
    if (err) throw err;
    console.log('Server listening on port', port);
});









