import { projectData } from './project_data.js';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <ul>
            {project.description && project.description.map((p_desc) => (
                <li><i class="fa-solid fa-star"></i> {p_desc}</li>
            ))}
            </ul>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;