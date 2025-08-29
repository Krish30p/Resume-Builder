import Resume from "../models/resumeModels.js"



export const createResume = async (req,res) => {

    try{ 
        const {title} = req.body;

       
        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    name: '',
                    progress: '',
                },
            ],
            interests: [''],
        };

        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
            ...req.body
        })
        res.status(201).json(newResume)
    }

    catch(error){
        res.status(500).json({message:"Failed  To Create Resume" , error: error.message})

    }
  
}


// get function 
export const getUserResumes = async (req,res) => {
    try {
        const resumes = await Resume.find({ userId: req.user._id }).sort({
            updatedAt: -1
        });
        res.json(resumes)
    } catch (error) {
            res.status(500).json({message:"Failed  To get  Resume" , error: error.message})
    }

}
// get resume by id 

export const getResumeById = async (req,res) => {
try {
    const resume = await Resume.find({_id: req.params.user.id, userID: req.res._id })
    if(!resume){
        return res.status(404).json({message:"Resume not found " })
    }
    res.json(resume)
} catch (error) {
        res.status(500).json({message:"Failed  To get  Resume" , error: error.message})

}
}


// update resume!@#$%^& 51:00