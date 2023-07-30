import Button from '~/components/Button';
import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
