import mongoose from "mongoose";


const ResumeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true

    },
    title:{
        type: String,
        required: true
    },

    thumbnailLink:{
        type: String
    },
    template:{
        theme: String,
        colorPalette:[String]
    },
    profileInfo:{
        ProfilePreviewUrl: String,
        fullName: String,
        designation: String,
        summary : String
    },
    contactInfo:{
        email: String,
        phone: String,
        location: String,
        linkdin : String,
        github: String,
        website: String
       
    }
})

// some left