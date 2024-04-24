import Logo from "../../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
    return (
        <header>
            <nav className={styles.navBar}>
                    <div className={styles.logoBox}>
                    <img src={Logo} alt="Logo-PortifolioApp" />
                </div>

                <div className={styles.menu}>
                <label>Sobre</label>
                <label>Stack</label>
                <label>Projetos</label>
                </div>

                <div className="contatBtn">
                <button>Contato</button>
                </div>
            </nav>
        </header>
  );
};