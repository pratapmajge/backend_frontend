import express from 'express'

const app=express()  // first file

app.get('/' ,(req ,res) =>{
    res.send('server is ready')
});

// get list of 5 jokes

app.get('/jokes' , (req , res) => {
    const jokes =[
        {
            id :1,
            title: ' A joke',
            content: 'First joke'
        },
        {
            id:2,
            title:'A joke two',
            content:'Another joke'
        },
        {
            id:3,
            title:'A joke three',
            content:'third joke'
        },
        {
            id:4,
            title:'A joke four',
            content:'fourth joke'
        },
        {
            id:5,
            title:'A joke five',
            content:'fifth joke'
        }
    ];
    res.send(jokes);
});

const port=process.env.PORT || 3000;

app.listen(port , () =>{
    console.log(`Server at http://localhost:${port}`);
    
});