import Button from '~/components/Button';
import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
