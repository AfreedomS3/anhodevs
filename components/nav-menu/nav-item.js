import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/nav-menu/NavItem.module.css";

function NavItem({ url, text, icon }) {
    const router = useRouter();

    const handleOnClick = () => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            const element = document.getElementById('nav-menu');
            element.style.visibility = 'hidden';
            element.style.transform = 'translateX(-300px)';
        }
    }

    return (
        <>
            {url ? (
            <div className={`${styles.links}
             ${(router.asPath === url || router.asPath === url + '#') && 
                text !== "Cerrar sesión" ? styles.isActive : ""}`} onClick={handleOnClick}>
                <Link href={url} legacyBehavior>
                    <a>
                        <span><ion-icon name={icon}></ion-icon></span>
                        {text}
                    </a>
                </Link>
            </div>
            ) : (
                <div className={styles.links} style={{cursor: "pointer"}} onClick={handleOnClick}>
                    <a>
                        <span><ion-icon name={icon}></ion-icon></span>
                        {text}
                    </a>
                </div>
            )}
        </>
    );
}

export default NavItem;
