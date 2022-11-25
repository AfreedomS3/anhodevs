import styles from '../styles/Portfolio.module.css';
import { useState, useEffect } from 'react';
import getProjects from '../libs/api-requests/get-projects';
import ProjectCard from '../components/project-card';
import ProjectSkeleton from '../components/project-skeleton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Layout from '../components/layout';

function Portfolio() {
  const [projects, setProjects] = useState(false);

  const handleOnScroll = (e) => {
    const button = document.getElementById('scroll-button');
    if (e.target.scrollTop > 378) {
      button.style.display = 'inline-flex';
    } else {
      button.style.display = 'none';
    }
  };

  const handleOnClick = () => {
    const elemento = document.getElementById('contenedor');
    elemento.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const data = await getProjects();
      if (data) {
        const projectList = data.map((project) => {
          return <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    url={project.url}
                    url_git={project.url_git}
                    tags_list={project.tags_list}
                    created={project.created}
                  />
        });
        if (!ignore) {
          setProjects(projectList);
        }
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Layout>
      <div id="contenedor" className={styles.container} onScroll={handleOnScroll}>
        <div className={styles.heading_container}><h1>Portafolio</h1></div>
        <div className={styles.content_wrapper}>
          <div>
            {projects ? (
              projects.length > 0 ? projects : (
                <div className={styles.no_projects}>
                  <h4>No hay proyectos para mostrar</h4>
                </div>
              )
            ) : <ProjectSkeleton />}
          </div>
        </div>
        <div id='scroll-button' className={styles.scroll_button} onClick={handleOnClick}>
          <span><KeyboardArrowUpIcon sx={{fontSize: '2rem'}} /></span>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
