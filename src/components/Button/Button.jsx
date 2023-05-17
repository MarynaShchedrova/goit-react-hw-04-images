import css from './Button.module.css';
import propTypes from 'prop-types';

export const Button = ({ onloadMore }) => {
  return (
    <button type="button" className={css.Button} onClick={onloadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: propTypes.func,
};
