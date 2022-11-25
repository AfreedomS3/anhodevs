import styles from '../../styles/auth-styles/TagForm.module.css';
import { useState } from 'react';
import postTag from '../../libs/api-requests/post-tag';

function TagForm() {
    const [formData, setFormData] = useState({name: ''});
    const [postResult, setPostResult] = useState({message: '', success: undefined, show: false});
    const { name } = formData;

    const handleOnChange = (e) => {
        setFormData({name: e.target.value});
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        postTag(formData).then(response => {
            setPostResult({...response, show: true});
            if (response.success) {
                setFormData({
                    name: ''
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
                <h3>Agregar Tag</h3>
                <form action='' onSubmit={handleOnSubmit}>
                    <div className={styles.formField}>
                        <label htmlFor='name'>Tag:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className={styles.formSubmit}>
                        <button type='submit'>Agregar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default TagForm;
