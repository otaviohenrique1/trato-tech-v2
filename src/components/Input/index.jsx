import styles from './Input.module.scss';
import PropTypes from "prop-types";

export default function Input({ value, onChange, ...outrosProps }, ref) {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      {...outrosProps}
      className={styles.input}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};