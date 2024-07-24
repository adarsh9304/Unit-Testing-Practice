import express from 'express'

export const app=express();

const port=3005;

import userRoute from './route/route.js'

app.use('/api',userRoute)

app.get('/',(req,res)=>{
    res.send('Hello from testing practice 1')
})

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})