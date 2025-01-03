import File from "../models/file.js"
export const uploadImage = async (req, res)=>{
   const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
   }

   try {
    const file = await File.create(fileObj);
    res.status(200).json({path: `http://localhost:${process.env.PORT}/file/${file._id}`});
   } catch (error) {
    console.log("Error uploading image:", error.message);
    res.status(500).json({message: "Error uploading image"});
   }
};


export const getImage = async (req, res)=>{
 
    try {
     const file = await File.findById(req.params.fileId);
     file.downloadCount++;
     await file.save();

     res.download(file.path, file.name);
    } catch (error) {
     console.log("Error uploading image:", error.message);
     res.status(500).json({message: "Error downloading image"});
    }
 };


