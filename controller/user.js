const userList = (req,res)=>{
    let data={
        list:'hello'
    }
    res.status(200).json({statusText:'success',data})
}

export default userList

