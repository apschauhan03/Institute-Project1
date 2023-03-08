const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const User = require('./models/User')
const PostModel = require('./models/Post')
const bcrypt = require('bcryptjs');
const { useDebugValue } = require('react');
const app = express()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const upload =multer({dest:'uploads/'})
const fs = require('fs')



const salt = bcrypt.genSaltSync(10);
const secret = 'fjosiefncjsoaghiurhyutaoijjsf'

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())
app.use('/uploads',express.static(__dirname + '/uploads'))

mongoose.connect('mongodb+srv://admin-okgrass:test123@cluster0.0ofxklg.mongodb.net/?retryWrites=true&w=majority')

app.post('/register',async (req,res)=>{
    const {username,password}= req.body
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        })
        res.json(userDoc)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
    
})

app.post('/login',async (req,res) =>{
    const {username,password} = req.body
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password,userDoc.password)
    if(passOk){
        //logged in
        jwt.sign({username,id:userDoc._id},secret,{},(err,token) => {
            if(err) throw err
            res.cookie('token',token).json('ok')
        })
    }else{
        res.status(400).json('wrong creditentials')
    }
})

app.get('/profile',(req,res) =>{
    const {token} = req.cookies
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err
        res.json(info)
    })
    res.json(req.cookies)
})

app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok')
})

app.post('/post',upload.single('file'),async(req,res)=>{
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {title,summary,content} = req.body;
      const postDoc = await PostModel.create({
        title,
        summary,
        content,
        file:newPath,
        author:info.id,
      });
      res.json(postDoc);
    })
})

app.get('/post',async(req,res)=>{
    res.json(await PostModel.find()
    .populate('author',['username'])
    .sort({createdAt:-1})
    .limit(9)
    )
})

app.get('/post/:id',async(req,res)=>{
    const {id} = req.params
    const postDoc= await PostModel.findById(id).populate('author',['username'])
    res.json(postDoc)
})

app.listen(4000)


//