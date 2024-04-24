import IconGit from "../../../assets/github-icon.png";
import IconLinkedin from "../../../assets/linkedin-icon.png";
import IconWpp from "../../../assets/whatsapp-icon.png";
import { user } from "../../user.js";

import styles from "./style.module.css";


export const Footer = () => {
    return (
        <footer>
            <section className={styles.footerSection}>
                    <div className={styles.Contatos}>
                        <h1>Contato</h1>
                        <div>
                            <img src={IconGit} alt="Git Icon" />
                            <img src={IconLinkedin} alt="Linkedin Icon" />
                            <img src={IconWpp} alt="Whatsapp Icon" />
                        </div>
                    </div>

                    <div className={styles.Responsavel}>
                        <p>Todos os direitos reservados - {user}</p>
                    </div>
            </section>
        </footer>
    );
}