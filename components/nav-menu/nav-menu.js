import styles from "../../styles/nav-menu/NavMenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NavItem from "./nav-item";
import logout from "../../libs/api-auth/logout";

function NavMenu({ isLoggedIn, updateSession }) {
    const router = useRouter();

    function handleLogout() {
        logout();
        updateSession(false);
        router.push('/auth/login');
    }

    return (
        <>
            <header id="nav-menu" className={styles.container}>
                <div>
                    <div className={styles.logoSocial}>
                        <Link href="/">
                            {/* <Image
                                src="/images/anho-logo.png"
                                alt="Logo ANHO"
                                width={200}
                                height={82}
                                priority
                            /> */}
                            <h1>ANHO <span>Devs</span></h1>
                        </Link>
                        <h3>Andrés Hoyos</h3>
                        <div className={styles.social}>
                            <a href="https://github.com/AfreedomS3" target='_blank' rel="noreferrer">
                                <span><ion-icon name="logo-github"></ion-icon></span>
                            </a>
                            <a href="https://www.linkedin.com" target='_blank' rel="noreferrer">
                                <span><ion-icon name="logo-linkedin"></ion-icon></span>
                            </a>
                        </div>
                    </div>
                    <nav className={styles.nav}>
                        <NavItem url="/" text="Inicio" icon="home-outline" />
                        <NavItem url="/portfolio" text="Portafolio" icon="folder-outline" />
                        <NavItem url="/about" text="Acerca de mí" icon="person-outline" />
                        {isLoggedIn && <NavItem url="/admin" text="Admin" icon="key-outline" />}
                        {isLoggedIn && (
                            <div onClick={handleLogout}>
                                <NavItem 
                                    url="" 
                                    text="Cerrar sesión" 
                                    icon="log-out-outline"
                                />
                             </div>
                        )}
                    </nav>
                    <footer className={styles.footer}>
                        <p>
                            Desarollado por {" "}
                            <Link href="/" legacyBehavior>
                                <a><b>ANHO Devs</b></a>
                            </Link>
                        </p>
                        <p>&copy; Copyright - {new Date().getFullYear()}</p>
                    </footer>
                </div>
            </header>
        </>
    );
}

export default NavMenu;
