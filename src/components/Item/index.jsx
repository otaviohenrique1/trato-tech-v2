import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheck, AiFillEdit, } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { mudarFavorito, mudarItem } from '../../store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../Input';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const quantidadeProps = {
  size: 32,
  color: '#1875E8'
}

export default function Item(props) {
  const [modoDeEdicao, setModoDeEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);

  const {
    titulo, foto, preco, descricao, favorito, id, carrinho, quantidade,
  } = props;
  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id));

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  const componenteModoDeEdicao = <>
    {
      (modoDeEdicao)
        ? <AiOutlineCheck
          {...iconeProps}
          className={styles["item-acao"]}
          onClick={() => {
            setModoDeEdicao(false);
            dispatch(mudarItem({id, item: { titulo: novoTitulo }}))
          }} />
        : <AiFillEdit
          {...iconeProps}
          className={styles["item-acao"]}
          onClick={() => setModoDeEdicao(true)} />
    }
  </>;

  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          {(modoDeEdicao)
            ? <Input
              value={novoTitulo}
              onChange={(evento) => setNovoTitulo(evento.target.value)}
            />
            : <h2>{titulo}</h2>
          }
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={resolverFavorito} />
              : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={resolverFavorito} />
            }
            {carrinho
              ? (
                <div className={styles.quantidade}>
                  Quantidade:
                  <AiFillMinusCircle
                    {...quantidadeProps}
                    onClick={() => {
                      if (quantidade >= 1) {
                        dispatch(mudarQuantidade({ id, quantidade: -1 }));
                      }
                    }}
                  />
                  <span>{String(quantidade || 0).padStart(2, '0')}</span>
                  <AiFillPlusCircle
                    {...quantidadeProps}
                    onClick={() => dispatch(mudarQuantidade({ id, quantidade: +1 }))}
                  />
                </div>
              )
              : (
                <>
                  <FaCartPlus
                    {...iconeProps}
                    color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                    className={styles['item-acao']}
                    onClick={resolverCarrinho}
                  />
                  {componenteModoDeEdicao}
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  titulo: PropTypes.string,
  foto: PropTypes.string,
  preco: PropTypes.number,
  descricao: PropTypes.string,
  favorito: PropTypes.bool,
  id: PropTypes.string,
  carrinho: PropTypes.bool,
  quantidade: PropTypes.number,
};
