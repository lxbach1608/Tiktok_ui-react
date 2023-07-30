import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')} onClick={onBack}>
            <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
            <h4 className={cx('title')}>{title}</h4>
        </header>
    );
}

export default Header;
