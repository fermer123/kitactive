import css from './header.module.css';

const Header = (props) => {
  return (
    <div className={css.header}>
      <img src='https://www.kitactive.ru/upload/CPriority/9d9/9d9dcc2b4fa7cbd618e963428ce5d581.svg' />
    </div>
  );
};

export default Header;
