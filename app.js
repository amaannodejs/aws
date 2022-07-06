const express =require('express'),
    app=express()


app.use('/',(req,res)=>{
    app.send('App is UP!!')
})



app.listen(process.env.PORT||'80',()=>{
    console.log('UP')
})