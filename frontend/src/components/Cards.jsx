import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import { cardStyles } from "../assets/dummystyle"
import { Clock, Edit, Trash2, Award, TrendingUp, Zap, Check } from "lucide-react";


// Profile info cards
export const ProfileInfoCard = () =>{
    const navigate = useNavigate()
    const {user, clearUser } = useContext(UserContext)

    const handleLogout = () =>{
        localStorage.clear();
        clearUser();
        navigate('/')
    }
    return (
        user && (
            <div className={cardStyles.profileCard}>
                <div className={cardStyles.profileInitialsContainer}>
                    <span className={cardStyles.profileInitialsText}>
                        {user.name ? user.name.charAt(0).toUpperCase(): "" }
                    </span>
                </div>

                <div className="flex flex-col items-start justify-center">
                    <div className={cardStyles.profileName}>
                        {user.name || ""}
                    </div>
                    <button className={cardStyles.logoutButton} onClick={handleLogout}>
                        Logout               
                    </button>
                </div>
            </div>
        )
    )
}

// ResumeSummaryCard Component
export const ResumeSummaryCard = ({
  title = "Untitled Resume",
  createdAt = null,
  updatedAt = null,
  onSelect,
  onDelete,
  completion = 85,
}) => {
  const [isHovered, setIsHovered] = useState(false);

//   created at 
  const formattedCreatedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    : "—";

    // updated at
  const formattedUpdatedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    : "—";
// color for completion status
  const getCompletionColor = () => {
    if (completion >= 90) return cardStyles.completionHigh;
    if (completion >= 70) return cardStyles.completionMedium;
    return cardStyles.completionLow;
  };

//   icon 
  const getCompletionIcon = () => {
    if (completion >= 90) return <Award size={12} />;
    if (completion >= 70) return <TrendingUp size={12} />;
    return <Zap size={12} />;
  };

//   delete methord
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

//   colors — Iron Man dark theme
  const generateDesign = () => {
    const colors = [
      "from-red-950 to-red-900",
      "from-amber-950 to-amber-900",
      "from-gray-800 to-red-950",
      "from-gray-800 to-amber-950",
      "from-red-900 to-gray-800"
    ];
    return colors[title.length % colors.length];
  };

  const designColor = generateDesign();

  return (
    <div
      className={cardStyles.resumeCard}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Completion indicator */}
      <div className={cardStyles.completionIndicator}>
        <div className={`${cardStyles.completionDot} bg-gradient-to-r ${getCompletionColor()}`}>
          <div className={cardStyles.completionDotInner} />
        </div>
        <span className={cardStyles.completionPercentageText}>{completion}%</span>
        {getCompletionIcon()}
      </div>

      {/* Preview area */}
      <div className={`${cardStyles.previewArea} bg-gradient-to-br ${designColor}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={cardStyles.emptyPreviewIcon}>
            <Edit size={28} className="text-amber-500" />
          </div>
          <span className={cardStyles.emptyPreviewText}>{title}</span>
          <span className={cardStyles.emptyPreviewSubtext}>
            {completion === 0 ? "Start building" : `${completion}% completed`}
          </span>

          {/* Mini resume sections indicator */}
          <div className="mt-4 flex gap-2">
            {['Profile', 'Work', 'Skills', 'Edu'].map((section, i) => (
              <div
                key={i}
                className={`px-2 py-1 text-xs rounded-md ${i < Math.floor(completion / 25)
                  ? 'bg-gray-900/90 text-amber-400 font-medium'
                  : 'bg-gray-800/50 text-gray-500'
                  }`}
              >
                {section}
              </div>
            ))}
          </div>
        </div>

        {/* Hover overlay with action buttons */}
        {isHovered && (
          <div className={cardStyles.actionOverlay}>
            <div className={cardStyles.actionButtonsContainer}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelect) onSelect();
                }}
                className={cardStyles.editButton}
                title="Edit"
              >
                <Edit size={18} className={cardStyles.buttonIcon} />
              </button>
              <button
                onClick={handleDeleteClick}
                className={cardStyles.deleteButton}
                title="Delete"
              >
                <Trash2 size={18} className={cardStyles.buttonIcon} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Info area */}
      <div className={cardStyles.infoArea}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h5 className={cardStyles.title}>{title}</h5>
            <div className={cardStyles.dateInfo}>
              <Clock size={12} />
              <span>Created At: {formattedCreatedDate}</span>
              <span className="ml-2">Updated At: {formattedUpdatedDate}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getCompletionColor()} rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
            style={{ width: `${completion}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          <div
            className={`absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/30 blur-sm transition-all duration-700`}
            style={{ left: `${Math.max(0, completion - 2)}%` }}
          ></div>
        </div>

        {/* Completion status */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-medium text-gray-500">
            {completion < 50 ? "Getting Started" : completion < 80 ? "Almost There" : "Ready to Go!"}
          </span>
          <span className="text-xs font-bold text-gray-300">{completion}% Complete</span>
        </div>
      </div>
    </div>
  );
};



// Templates  card

export const TemplateCard = ({thumbnailImg, isSelected, onSelect}) =>{
  return(
    <div className={`group h-[280px] sm:h-[300px] lg:h-[320px] flex flex-col bg-gray-900 border-2 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 rounded-3xl
      ${
        isSelected? 'border-amber-500 shadow-lg shadow-amber-500/20 bg-amber-950/20 '
        : 'border-gray-700/50 hover:border-red-700/50 '
      }`} onClick={onSelect}>
        {thumbnailImg?(
          <div className="relative w-full h-full overflow-hidden">
            <img src={thumbnailImg || '/placeholder.svg'} alt="Template Review" className="w-full h-full object-cover object-top group-hover:scale-110
            transition-transform duration-700" />
            <div className=" absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 "/>

            {isSelected && (
              <div className="absolute inset-0 bg-amber-500/10 flex items-center justify-center">
                <div className=" w-16 h-16 bg-gray-900/80 backdrop-blur-sm rounded-full  flex items-center justify-center shadow-lg animate-pulse ">
                  <Check size={24} className="text-amber-500" />
                </div>
              </div>
            )}
            {/* hover effect */}
            <div className=" absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0
            group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ): (
          <div className="w-full h-[200px] flex items-center flex-col justify-center bg-gradient-to-br from-gray-800
          via-red-950 to-gray-800 ">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl flex items-center
            justify-center mb-3">
              <Edit className="text-white" size={20} />
            </div>
            <span className="text-gray-300 font-bold ">No Preview</span>
          </div>
        )}
      </div>
  )
}