import styles from "./NaoEncontrada.module.css";

function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h2>Eita!</h2>
      <p>Não foi possivel encontar o conteúdo :/</p>
    </section>
  );
}

export default NaoEncontrada;
