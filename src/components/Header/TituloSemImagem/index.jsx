import styles from './TituloSemImagem.module.scss';
import PropTypes from 'prop-types';

export default function TituloSemImagem({
  titulo, descricao, children
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        {titulo}
      </h1>
      <h2 className={styles.descricao}>
        {descricao}
      </h2>
      {children}
    </div>
  )
}

TituloSemImagem.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  children: PropTypes.node,
};
