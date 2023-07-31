import Styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} style={{ textDecoration: 'none' }}>
            <img className={cx('img')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('username')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />}
                </p>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
