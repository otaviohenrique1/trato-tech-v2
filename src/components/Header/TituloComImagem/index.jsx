import styles from './TituloComImagem.module.scss';
import PropTypes from 'prop-types';

export default function TituloComImagem({
  titulo, descricao, imagem, className, children
}) {
  return (
    <div className={`${className} ${styles.header}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
        {children}
      </div>
      <div className={styles['header-imagem']}>
        <img
          alt={titulo}
          src={imagem}
        />
      </div>
    </div>
  )
}

TituloComImagem.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  imagem: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
