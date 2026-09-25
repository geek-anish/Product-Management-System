export const fileController = (req, res, next)=>{
    //send link of that file to the postman

    let link=`http://localhost:8000/${req.file.filename}`
    res.status(200).json({
        success:true,
        message:"file upload sucess",
        result:link,
    })
}