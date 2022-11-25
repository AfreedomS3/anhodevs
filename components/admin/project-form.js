import styles from '../../styles/auth-styles/ProjectForm.module.css';
import { useState } from 'react';
import postProject from '../../libs/api-requests/post-project';
import TagOptions from './tag-options';

function ProjectForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        thumbnail: null,
        url: '',
        url_git: '',
        tags: [], 
    });

    const [postResult, setPostResult] = useState({message: '', success: undefined, show: false});

    const { title, description, thumbnail, url, url_git, tags } = formData;

    const handleInputOnChange = (e) => {
        if (e.target.name === "url" || e.target.name === "url_git") {
            const pattern = new RegExp('https://.*');
            if (!pattern.test(e.target.value)) {
                e.target.setCustomValidity("Ingrese una url en este formato https://ejemplo.com")
            } else {
                e.target.setCustomValidity("");
            }
        }
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileOnChange = (e) => {
        let file = e.target.files[0];
        setFormData({...formData, [e.target.name]: file});
    };

    const handleSelectOnChange = (e) => {
        const tagsSelected = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({...formData, [e.target.name]: tagsSelected});
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let postData = new FormData();
        postData.append('title', title);
        postData.append('description', description);
        postData.append('thumbnail', thumbnail, thumbnail.name);
        postData.append('url', url);
        postData.append('url_git', url_git);
        for (const tag of tags) {
            postData.append('tags', tag);
        }
        postProject(postData).then(response => {
            setPostResult({...response, show: true});
            if (response.success) {
                setFormData({
                    title: '',
                    description: '',
                    thumbnail: null,
                    url: '',
                    url_git: '',
                    tags: [], 
                });
                e.target.reset();
            }
            setTimeout(() => {
                setPostResult({...response, show: false});
            }, 3000);
        });
        
    };

    return (
        <>
            <div className={styles.container}>
                {
                    postResult.show && 
                    <div className={`${styles.postResult} ${!postResult.success && styles.postError}`}>
                        <p>{postResult.message}</p>
                    </div>
                }
                <h3>Agregar proyecto</h3>
                <form action='' onSubmit={handleOnSubmit}>
                    <div className={styles.form_group_left}>
                        <div className={styles.formField}>
                            <label htmlFor="title">Título:</label>
                            <input
                            type="text" 
                            name="title"
                            value={title}
                            onChange={handleInputOnChange}
                            required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="description">Descripción:</label>
                            <textarea 
                            name="description"
                            value={description}
                            onChange={handleInputOnChange}
                            required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="thumbnail">Miniatura:</label>
                            <input
                            type="file" 
                            name="thumbnail"
                            accept='image/*'
                            onChange={handleFileOnChange}
                            required
                            />
                        </div>
                    </div>
                    <div className={styles.form_group_right}>
                        <div className={styles.formField}>
                            <label htmlFor="url">URL:</label>
                            <input
                            type="url" 
                            name="url"
                            value={url}
                            onChange={handleInputOnChange}
                            required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="url_git">URL Repositorio:</label>
                            <input
                            type="url" 
                            name="url_git"
                            value={url_git}
                            onChange={handleInputOnChange}
                            required
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="tags">Tags:</label>
                            <select
                            name="tags"
                            multiple
                            size="3"
                            onChange={handleSelectOnChange}
                            required
                            >
                                <option value="" defaultValue disabled>Seleccionar...</option>
                                <TagOptions />
                            </select>
                        </div>
                    </div>
                    <div className={styles.formSubmit}>
                        <button type='submit'>Agregar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProjectForm;
