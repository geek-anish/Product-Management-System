import { Review } from "../schema/model.js"

export const createReviewController= async (req,res,next)=>{
    let result= await Review.create(req.body);

     res.json({
      success:true,
      message:"review created sucessfully",
      result:result,
    });

};

export const readAllreviewController = async (req, res, next) => {
    const result= await Review.find({}).populate("product").populate("user");
    res.json({
      sucesss:true,
      message:"review read successfully",
      result:result,
    });
    
  };

  export const reviewDetailsController = async (req, res, next) => {
      let result=await Review.findById(req.params.id).populate("product").populate("user");
      res.json({
        sucesss: true,
        message: "review read sucessfully",
        result:result,
      });
      
    };

  export const updateReviewController = async (req, res, next) => {
      let result=await Review.findByIdAndUpdate(req.params.id,req.body,{new:true,})
      res.json({
        sucesss: true,
        message: "Review updated sucessfully",
        result:result,
      });
    } ;
  export const deleteReviewController = async (req, res, next) => {
      let result=await Review.findByIdAndDelete(req.params.id)
  
      res.json({
        sucesss: true,
        message: "Review deleted sucessfully",
        result:result,
      });
    };