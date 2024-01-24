import styles from './Button.module.scss';
import PropTypes from "prop-types";

export default function Button({ children, type, onClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
