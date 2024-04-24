import styles from "./style.module.css";
import { projects } from "../../projects.js"
import IconGit from "../../../assets/git-icon.png";
import List from "../listChildren";

export const ProjectsSection = () => {
    return (
        <section className={styles.sectionProjects}>
            <h1>Projetos</h1>
            <List>
                {projects.map((proj, index) => (
                    <li key={index} className={styles.projectsList}>
                        <div className={styles.listDiv}>
                            <div>
                                <h2>{proj.name}</h2>
                                <img src={IconGit} alt="gitIcon" />
                            </div>
                            <span>{proj.description}</span>
                            <a href="https://github.com/KaikeBueno?tab=repositories">Saiba Mais</a>
                        </div>
                    </li>
                ))}
            </List>
        </section>
    )
}