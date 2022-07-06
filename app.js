const express =require('express'),
    app=express()


app.use('/',(req,res)=>{
    res.send('App is UP!!')
})



app.listen(process.env.PORT||'80',()=>{
    console.log('UP')
})