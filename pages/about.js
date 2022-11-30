import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heading_container}><h1>Acerca de mí</h1></div>
        <div id="printable-content" className={styles.content_wrapper}>
          <div>
            <div className={styles.sidebar_container}>
              <div className={styles.photo_container}>
                <Image
                  src="/images/profile.jpg"
                  alt="Picture of me"
                  width={133}
                  height={180}
                />
              </div>
              <div className={styles.info_contact}>
                <h4>INFORMACIÓN Y CONTACTO</h4>
                <div><p><span><ion-icon name="call-outline"></ion-icon></span> +57 316 722 32 53</p></div>
                <div>
                  <p>
                    <span><ion-icon name="mail-outline"></ion-icon></span> 
                    <a href='mailto:andresf.s3@hotmail.com'> andresf.s3@hotmail.com</a>
                  </p>
                </div>
                <div>
                  <p>
                    <span><ion-icon name="logo-linkedin"></ion-icon></span> 
                    <a href='https://www.linkedin.com' target='_blank' rel="noreferrer"> Linkedin</a>
                  </p>
                </div>
                <div>
                  <p>
                    <span><ion-icon name="logo-github"></ion-icon></span> 
                    <a href='https://github.com/AfreedomS3' target='_blank' rel="noreferrer"> GitHub</a>
                  </p>
                </div>
                <div>
                  <p>
                    <span><ion-icon name="globe-outline"></ion-icon></span> 
                    <a href='https://anhodevs.vercel.app' target='_blank' rel="noreferrer"> Portafolio Web</a>
                  </p>
                </div>
                <div><p><span><ion-icon name="location-outline"></ion-icon></span> Lorica - Córdoba (Colombia)</p></div>
              </div>
              <div>
                <h4>CONOCIMIENTOS</h4>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>React Js, Next Js</li>
                  <li>Python</li>
                  <li>Django, Django REST Framework</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>MySQL, PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h4>IDIOMAS</h4>
                <ul>
                  <li>Español (Nativo)</li>
                  <li>Inglés (Intermedio B1-B2)</li>
                </ul>
              </div>
            </div>
            <div className={styles.main_container}>
              <section className={styles.content_section}>
                <div className={styles.content}>
                  <h2>ANDRÉS FELIPE</h2>
                  <h3>HOYOS HERNÁNDEZ</h3>
                  <h4>Ingeniero de Sistemas (Egresado no graduado)</h4>
                  <p>Edad: 23</p>
                  <p className={styles.description}>
                    Ingeniero de sistemas con conocimientos en desarrollo de software, desarrollo Web
                    Front-end y Back-end, automatización web y documentación de procesos.
                    Tengo conocimientos en tecnologías HTML, CSS, JavaScript, React Js, Next Js,
                    Python, Django - Django REST Framework, MySQL, PostgreSQL.
                    Conocimientos básicos en Java y PHP.
                  </p>
                </div>
              </section>
              <section className={styles.content_section}>
                <div className={styles.content_heading}>
                  <span><h4>EXPERIENCIA</h4></span><span><WorkOutlineOutlinedIcon sx={{fontSize: '2rem'}} /></span>
                </div>
                <div className={`${styles.content} ${styles.experience_content}`}>
                  <h4>DESARROLLADOR WEB (3 Meses)</h4>
                  <p><strong>INDEPENDIENTE</strong></p>
                  <p><strong>Loríca - Córdoba (Colombia)</strong></p>
                  <ul>
                    <li>
                      Desarrollo de un portafolio web utilizando React Js con Next Js en el front-end y Django REST
                      Framework en el back-end para desarrollar una API que almacena la información del portafolio en una base de datos PostgreSQL. <br />
                      El proyecto puede ser visitado en: <br /> <a style={{color: 'dodgerblue'}} href='https://anhodevs.vercel.app' target='_blank' rel="noreferrer">anhodevs.vercel.app</a>.
                    </li>
                    <li>
                      Desarrollo de un sistema de inventario de equipos para el área de sistemas de la empresa Minerva Foods en Ciénaga de Oro - Córdoba. Desarrollado con HTML, CSS, JavaScript, Bootstrap, Jquery, PHP y MySQL.
                    </li>
                  </ul>
                  <p>Septiembre 2022 - Noviembre 2022</p>
                </div>
                <div className={`${styles.content} ${styles.experience_content}`}>
                  <h4>PROGRAMADOR PYTHON (3 Meses)</h4>
                  <p><strong>INNTECCO - UNIVERSIDAD DEL SINÚ</strong></p>
                  <p><strong>Montería - Córdoba (Colombia)</strong></p>
                  <ul>
                    <li>
                      Desarrollo de programas para la manipulación de datos en Python.
                    </li>
                    <li>
                      Desarrollo de métricas para el análisis de datos de redes sociales a través de consultas SQL - QQL con la API de Quintly.
                    </li>
                    <li>
                      Automatización Web con la librería Selenium en Python.
                    </li>
                    <li>
                      Documentación de procesos.
                    </li>
                  </ul>
                  <p>Agosto 2021 - Noviembre 2021</p>
                </div>
              </section>
              <section className={styles.content_section}>
                <div className={styles.content_heading}>
                  <span><h4>FORMACIÓN</h4></span><span><SchoolOutlinedIcon sx={{fontSize: '2.5rem'}} /></span>
                </div>
                <div className={`${styles.content} ${styles.education_content}`}>
                  <h4>INGENIERÍA DE SISTEMAS (EGRESADO NO GRADUADO)</h4>
                  <p><strong>UNIVERSIDAD DEL SINÚ</strong></p>
                  <p><strong>Montería - Córdoba (Colombia)</strong></p>
                  <p>2016 - Actualidad</p>
                </div>
                <div className={`${styles.content} ${styles.education_content}`}>
                  <h4>BACHILLER ACADÉMICO</h4>
                  <p><strong>INSTITUCIÓN EDUCATIVA EUGENIO SÁNCHEZ CÁRDENAS</strong></p>
                  <p><strong>Lorica - Córdoba (Colombia)</strong></p>
                  <p>2015</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
