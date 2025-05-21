import './App.css'
import Introduction from './Introduction'
import Projects from './Projects'
import Jobs from './Jobs'
import Contact from './Contact'
import Image from './Image'
import PreviousWebsite from './PreviousWebsite'
import ProjectIntro from './ProjectIntro'
import DropdownMenu from './DropdownMenu.jsx'

function App() {
  
  const jobs = [
    {
      jobNum: 1,
      company: "PSI Paving",
      job_title: "Construction worker",
      timeline: "5/19-7/19",
      experience: "blah blah blah",
      logoPath: "Images/picsvg_download.svg"
    },
    {
      jobNum: 2,
      company: "Freudenburg Medical",
      job_title: "Co-op 1",
      timeline: "1/23-4/23",
      experience: "blah blah blah",
      logoPath: "Images/freudenburgLogo.svg"
      
    },
    {
      jobNum: 3,
      company: "Fort Knox HRC",
      job_title: "Co-op 2",
      timeline: "1/24-Present",
      experience: "blah blah blah",
      logoPath: "Images/HRCPatch.png"
      
    }
  ]
  
  const jobsComponent = jobs.map(
    job => (
      <Jobs key={job.jobNum} company={job.company} job_title={job.job_title} timeline={job.timeline} experience={job.experience} logo={job.logoPath}/>
    )
  )

  const projects = [
    {
      projectID: 1,
      topic: "Deep Learning",
      logoPath:"./Images/nn.png",
      title: "Image Processing w/ CNNs and Auto Encoding",
      description: "Processed infrared and RGB images using deep neural networks"
    },
    {
      projectID: 2,
      topic: "Data Analytics",
      logoPath:"./Images/da.png",
      title: "Data Analysis w/ Python",
      description: "Analyzed data using Python and Pandas"
    },
    {
      projectID: 3,
      topic: "Web Development",
      logoPath:"./Images/wd.png",
      title: "Web Development",
      description: "Developed a web application using React and Node.js"
    },
    {
      projectID: 4,
      topic: "Machine Learning",
      logoPath:"./Images/nn.png",
      title: "Machine Learning w/ Python",
      description: "Developed a machine learning model using Python and Scikit-learn"
    }
  ]

  const projectsComponent = projects.map(project=>(
    <Projects key={project.projectID} projectTitle={project.title} description={project.description} topic={project.topic} logo={project.logoPath}/>
  ))
  
  
  return (
    <div className='div0 font-chivo'>
      <div className='w-screen bg-transparent text-gray-300 overflow-auto font-chivo'>
        <Contact/>
        <Image/>
        <Introduction/>
      
        <div className='flex justify-center my-20'>
          <PreviousWebsite/>
        </div>
        <div className='grid grid-cols-3 bg-neutral-700 my-30 h-65 items-center border-y-1 border-neutral-300'>
          {jobsComponent}
        </div>

        <ProjectIntro/>

        
        
        <div className='grid grid-cols-4 gap-5 mx-50 my-10 h-80 !items-center'>
          {projectsComponent}
        </div>
        
      </div>
    </div>
  )
}

export default App
