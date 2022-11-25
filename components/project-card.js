import Image from 'next/image';
import styles from '../styles/project-card/ProjectCard.module.css';

function ProjectCard({ title, description, thumbnail, url, url_git, tags_list, created }) {
    const tags = tags_list.map((tag) => {
        return <div key={tag.id}><p>{tag.name}</p></div>;
    });

    return (
        <div className={styles.project_card}>
            
            <div className={styles.card_container}>
                <a href={url} target="_blank" rel="noreferrer">
                    <div className={styles.contenedor_img}>
                        <Image
                            src={thumbnail}
                            alt='Miniatura proyecto'
                            fill
                            sizes="(max-width: 768px) 50vw"
                        />
                    </div>
                </a>
                <div className={styles.contenedor_description}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>
                        <a href={url_git} target="_blank" rel="noreferrer" 
                        className={styles.link_git}
                        >
                            Ver repositorio en GitHub
                        </a>
                    </p>
                    <p>
                        <a href={url} target="_blank" rel="noreferrer" 
                        className={styles.link_git}
                        >
                            Ver Proyecto
                        </a>
                    </p>
                </div>
                <div className={styles.contenedor_date}>
                    <time dateTime={created} pubdate="pubdate">{new Date(created).toLocaleDateString()}</time>
                </div>
                <div className={styles.tags_container}>
                    {tags}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
