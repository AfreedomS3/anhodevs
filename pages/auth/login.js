import styles from '../../styles/auth-styles/Login.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import login from '../../libs/api-auth/login';

function Login({ isLoggedIn, updateSession }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (formData.username === "" || formData.password === "") {
            setFormData({
                [form["username"].name]: form["username"].value, 
                [form["password"].name]: form["password"].value
            });
        }
        login(formData).then((response) => updateSession(response.isLoggedIn));
    };

    useEffect(() => {
        if (isLoggedIn) {
          router.push('/admin');
        }
    });

    useEffect(() => {
        const element = document.querySelector('input[name="username"]');
        if (element) {
            element.focus();
        }
    }, []);

    return (
        <>
            {isLoggedIn ? (
                <p>Redirigiendo...</p>
            ) : (
                <div className={styles.container}>
                    <div className={styles.loginContainer}>
                        <div>
                            <h1>Inicio de sesión</h1>
                            <hr />
                            <form onSubmit={handleOnSubmit}>
                                <div className={styles.formField}>
                                    <label htmlFor="username">Usuario</label>
                                    <input 
                                        type="text" 
                                        name="username"
                                        value={username}
                                        onChange={handleOnChange}
                                        placeholder="Ingrese el usuario" 
                                        required
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label htmlFor="password">Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        value={password}
                                        onChange={handleOnChange}
                                        placeholder="Ingrese la contraseña" 
                                        required
                                    />
                                </div>
                                <div className={styles.submit}>
                                    <button type="submit">Ingresar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
