import Image from 'next/image';
import styles from '../styles/project-card/ProjectCard.module.css';
import { useEffect } from 'react';
import { checkBtnVisibility, scrollX } from '../libs/project-card/scroll-tag';


function ProjectCard({ title, description, thumbnail, url, url_git, tags_list, created }) {
    const tags = tags_list.map((tag) => {
        return <div key={tag.id}><p>{tag.name}</p></div>;
    });

    useEffect(() => {
        const containers = document.getElementsByClassName(styles.tags_container);
        for (let container of containers) {
            if (container.scrollWidth > container.offsetWidth) {
                container.style.width = '75%';
                let parentContainer = container.parentNode;
                let buttons = parentContainer.getElementsByClassName(styles.btn);
                for (let button of buttons) {
                    button.style.display = 'flex';
                }

                let btnRight = parentContainer.getElementsByClassName(styles.btn_r)[0];
                let btnLeft = parentContainer.getElementsByClassName(styles.btn_l)[0];
                btnRight.addEventListener('click', () => {
                    scrollX(container, 'right', 1, 100, 10, btnRight, btnLeft);
                });
                btnLeft.addEventListener('click', () => {
                    scrollX(container, 'left', 1, 100, 10, btnRight, btnLeft);
                });

                container.addEventListener('wheel', (e) => {
                    // if deltaY === 0, touchpad is being used
                    if (e.deltaY === 0) {
                        checkBtnVisibility(container, btnRight, btnLeft);
                    }
                });
            }
        }
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
                </div>
                <div className={styles.urls}>
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
                <div className={styles.wrapper}>
                    <div className={styles.tags_container}>
                        {tags}
                    </div>
                    <div className={`${styles.btn} ${styles.btn_l}`}>
                        <span>&lt;</span>
                    </div>
                    <div className={`${styles.btn} ${styles.btn_r}`}>
                        &gt;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
