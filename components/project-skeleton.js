import styles from '../styles/project-card/ProjectSkeleton.module.css';

function ProjectSkeleton() {
    return (
        <>
            <div className={styles.load_skeleton}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.load_skeleton}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}

export default ProjectSkeleton;
