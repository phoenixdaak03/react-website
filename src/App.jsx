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
      job_title: "Construction Worker",
      timeline: "5/19-7/19",
      experience: "Assisted in the construction of roads and parking lots. Worked with heavy machinery and tools. Aquired knowled of paving process and studied the operation of heavy machinery.",
      logoPath: "Images/picsvg_download.svg"
    },
    {
      jobNum: 2,
      company: "Freudenburg Medical",
      job_title: "Machine and Design Co-op",
      timeline: "1/23-4/23",
      experience: "Conducted engineering design within a machine and tooling design team. Innovated tools regarding razor bload safety on production floor. Proposed and communicated design ideas with health and safety coordinator. Thoroughly worked with SolidWorks CAD software for development models and drawings.",
      logoPath: "Images/freudenburgLogo.svg"
      
    },
    {
      jobNum: 3,
      company: "Fort Knox HRC",
      job_title: "Computer Engineer Trainee Co-op",
      timeline: "1/24-Present",
      experience: "Application design within Microsoft PowerApps. Developed functional flows within apps with Power Automate. Attended weekly breifs with departemnet and functionals to communicate updates, changes, and future plans.",
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
      report: "ProjectReports/FinalProjectReport_PD.pdf",
      description: "Processed infrared and RGB images using deep neural networks"
    },
    {
      projectID: 2,
      topic: "Deep Learning",
      logoPath:"./Images/da.png",
      title: "Natural Language Processing with RNNs",
      report: "ProjectReports/HW3_Report_PD.pdf",
      description: "Analyzed data using recurrent neural networks to classify sentiment of text"
    },
    {
      projectID: 3,
      topic: "Web Development",
      logoPath:"./Images/wd.png",
      title: "Web Development",
      report: "https://phoenixdaak03.github.io/",
      description: "Developed a personal portfolio website using plain HTML and CSS"
    },
    {
      projectID: 4,
      topic: "Artificial Intelligence",
      logoPath:"./Images/nn.png",
      title: "Genetic Algorithms",
      report: "ProjectReports/Project4Report.pdf",
      description: "Developed a genetic algorithm to solve optimization Traveling Salesman Problem"
    }
  ]

  const projectsComponent = projects.map(project=>(
    <Projects key={project.projectID} projectTitle={project.title} description={project.description} topic={project.topic} logo={project.logoPath} report={project.report}/>
  ))
  
  
  return (
    <div className='div0 font-chivo'>
      <div className='w-screen bg-transparent text-gray-300 overflow-auto font-chivo'>
        <Contact/>
        <Image/>
        <Introduction/>
      
        {/* <div className='flex justify-center my-20'>
          <PreviousWebsite/>
        </div> */}

        <div className='lg:grid lg:grid-cols-3 bg-neutral-700 my-20 h-auto border-y-1 border-neutral-300'>
          {jobsComponent}
        </div>

        <ProjectIntro/>

        
        
        <div className='h-auto place-items-center grid grid-cols-1 lg:grid-cols-4 lg:gap-5 lg:mx-50 my-10 h-80 lg:!items-center'>
          {projectsComponent}
        </div>
        
      </div>
    </div>
  )
}

export default App
