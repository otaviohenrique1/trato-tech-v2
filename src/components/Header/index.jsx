import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';
import PropTypes from 'prop-types';

export default function Header({ titulo, descricao, className = '', imagem, children }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        >{children}</TituloSemImagem>
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >{children}</TituloComImagem>
      }
    </header>
  )
}

Header.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  className: PropTypes.string,
  imagem: PropTypes.string,
  children: PropTypes.node,
};