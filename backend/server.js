import express from 'express'

const app=express()  // first file

app.get('/' ,(req ,res) =>{
    res.send('server')
});