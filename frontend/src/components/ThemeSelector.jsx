import React, { useEffect, useState, useRef } from 'react'
import { DUMMY_RESUME_DATA, resumeTemplates } from '../utils/data'
import { TemplateCard } from './Cards'
import RenderResume from './RenderResume'
import { Check } from 'lucide-react'

const TAB_DATA = [{ label: 'Templates' }]

// Tabs component (if not imported from elsewhere)
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            activeTab === tab.label
              ? 'bg-violet-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

const ThemeSelector = ({ selectedTheme, setSelectTheme, resumeData, onClose }) => {
  const resumeRef = useRef(null)
  const [baseWidth, setBaseWidth] = useState(800)

  // Selected Templates using id
  const initialIndex = resumeTemplates.findIndex(t => t.id === selectedTheme)
  const [selectedTemplate, setSelectedTemplate] = useState({
    theme: selectedTheme || resumeTemplates[0]?.id || "",
    index: initialIndex >= 0 ? initialIndex : 0
  })

  const [tabValue, setTabValue] = useState('Templates')

  const handleThemeSelection = () => {
    setSelectTheme(selectedTemplate.theme)
    onClose() // Fixed: was 'onclose()' (lowercase 'c')
  }

  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth)
    }
  }

  useEffect(() => {
    updateBaseWidth()
    window.addEventListener('resize', updateBaseWidth)
    return () => {
      window.removeEventListener("resize", updateBaseWidth)
    }
  }, [])

  return (
    <div className='max-w-7xl mx-auto px-4'>
      {/* header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4
      sm:p-6 bg-gradient-to-r from-white to-violet-50 rounded-2xl border border-violet-100'>

        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

        <button 
          className='w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r
          from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-105 transition-all
          shadow-lg hover:shadow-xl' 
          onClick={handleThemeSelection}
        >
          <Check size={18} /> Apply Changes
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8'>
        {/* Left area - Template selection */}
        <div className='lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-4 sm:p-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-auto p-2'>
            {resumeTemplates.map((template, index) => (
              <TemplateCard 
                key={`templates_${index}`}
                thumbnailImg={template.thumbnailImg}
                isSelected={selectedTemplate.index === index}
                onSelect={() => setSelectedTemplate({
                  theme: template.id,
                  index
                })}
              />
            ))}
          </div>
        </div>

        {/* Right area - Preview */}
        <div className='lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6' ref={resumeRef}>
          <RenderResume 
            templateId={selectedTemplate?.theme || ""}
            resumeData={resumeData || DUMMY_RESUME_DATA}
            containerWidth={baseWidth}
          />
        </div>
      </div>
    </div>
  )
}

export default ThemeSelector