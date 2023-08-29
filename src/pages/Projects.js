import React, { useEffect } from 'react';
import './Projects.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">LATEST PROJECTS</h1>
      <p className="projects-para">
      I've breathed life into 25+ deployed projects, giving each a distinct touch of excellence. My creative playground extends beyond the digital realm, encompassing the crafting of 10+ intricate 3D models. My journey has been enriched through collaboration with 30+ fellow enthusiasts, and I've catered to the unique visions of 10+ valued clients, each interaction a testament to my commitment to turning imagination into reality.
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <ProjectCard

              image={project.image_url}
              title={project.project_name}
              description={project.description}
              stacks={project.tech_stack}
              source_link={project.source_link}

            />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
