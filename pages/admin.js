import styles from '../styles/auth-styles/Admin.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProjectForm from '../components/admin/project-form';
import TagForm from '../components/admin/tag-form';
import Layout from '../components/layout';

export default function Admin({ isLoggedIn }) {
  const router = useRouter();
  const [tab, setTab] = useState(1);

  const activeStyle = {
    border: '2px solid #2A5265',
    borderBottom: '1px solid #2A5265',
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/auth/login');
    }
  });

  return (
    <Layout>
      {!isLoggedIn ? <p>Redirigiendo...</p> : (
        <div className={styles.container}>
          <div className={styles.heading_container}><h1>Panel administrador</h1></div>
          <div>
            <div className={styles.button_container}>
              <button style={tab === 1 ? activeStyle : {}} onClick={() => setTab(1)}>Agregar proyecto</button>
              <button style={tab === 2 ? activeStyle : {}} onClick={() => setTab(2)}>Agregar tag</button>
            </div>
            {
              tab === 1 ? <ProjectForm /> :
              tab === 2 && <TagForm />
            }
          </div>
        </div>
      )}
    </Layout>
  );
}
