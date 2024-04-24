import styles from "./style.module.css";
import { technologies } from "../../technologies.js";
import List from "../listChildren";

export const TechSection = () => {
    return (
        <section className={styles.SectionTech}>
            <h1>Tecnologias</h1>
            <List>
                {technologies.map((tech, index) => (
                    <li key={index} className={styles.TechList}>
                        <div>
                            <img src={tech.img} alt={tech.name} />
                            <span>{tech.name}</span>
                        </div>
                    </li>
                ))}
            </List>
        </section>
  );
};