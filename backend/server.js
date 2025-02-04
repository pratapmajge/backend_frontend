import express from 'express'

const app=express()  // first file

app.get('/' ,(req ,res) =>{
    res.send('server is ready')
});

const port=process.env.PORT || 3000;