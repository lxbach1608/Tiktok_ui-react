import Styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('img')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0b1d58fee5011827b610b33d694e6c51~c5_300x300.webp?x-expires=1690783200&x-signature=QwCAG4zRlMoLj%2BIVtrDyHl2tvuw%3D"
                alt="hoa_2309"
            />
            <div className={cx('info')}>
                <p className={cx('username')}>
                    hoa_2309
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                </p>
                <span className={cx('name')}>Ngô Ngọc Hòa</span>
            </div>
        </div>
    );
}

export default AccountItem;
