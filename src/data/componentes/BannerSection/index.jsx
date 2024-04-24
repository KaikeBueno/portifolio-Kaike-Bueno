import Banner from "../../../assets/banner-img.png";
import { username } from "../../user.js";
import styles from "./style.module.css";

export const BannerSection = () => {
    return (
            <section className={styles.SectionBanner}>
                <div className={styles.UserBanner}>
                    <label>{username}</label>
                    <h1>Bem vindo ao meu portfólio</h1>
                    <p>Uma frase interessante sobre mim</p>
                    <button>Saiba Mais</button>
                </div>
                <div>
                    <img src={Banner} alt="banner computador" />
                </div>
            </section>
    )
}