import Resume from "../models/resumeModel.js";
import upload from "../middleware/uploadMiddleware.js";

export const uploadResumeImages = async (req, res) => {
  try {
    // Configure multer to handle images (memory storage)
    upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(
      req,
      res,
      async (err) => {
        if (err) {
          return res
            .status(400)
            .json({ message: "file upload failed", error: err.message });
        }

        try {
          const resumeId = req.params.id;
          const resume = await Resume.findOne({
            _id: resumeId,
            userId: req.user._id,
          });

          if (!resume) {
            return res
              .status(404)
              .json({ message: "Resume not found or unauthorised" });
          }

          const newThumbnail = req.files?.thumbnail?.[0];
          const newProfileImage = req.files?.profileImage?.[0];

          // Convert buffer to base64 data URL and store in MongoDB
          if (newThumbnail) {
            const base64 = newThumbnail.buffer.toString("base64");
            const dataUrl = `data:${newThumbnail.mimetype};base64,${base64}`;
            resume.thumbnailLink = dataUrl;
          }

          if (newProfileImage) {
            const base64 = newProfileImage.buffer.toString("base64");
            const dataUrl = `data:${newProfileImage.mimetype};base64,${base64}`;
            resume.profileInfo.profilePreviewUrl = dataUrl;
          }

          await resume.save();
          res.status(200).json({
            message: "image uploaded successfully",
            thumbnailLink: resume.thumbnailLink,
            profilePreviewUrl: resume.profileInfo?.profilePreviewUrl,
          });
        } catch (innerError) {
          console.error("Error processing upload:", innerError);
          res
            .status(500)
            .json({ message: "failed to process uploaded images", error: innerError.message });
        }
      }
    );
  } catch (error) {
    console.error("error uploading images:", error);
    res
      .status(500)
      .json({ message: "failed to upload images", error: error.message });
  }
};
