const express = require('express');
const app1 = express();

app1.get('/data',async (req,res)=>{
  const data=await fetchData();
  res.json(data)
})

async function fetchData(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({message:'Hello Jest'})
    }, 1000);
  })
}

module.exports = app1;
