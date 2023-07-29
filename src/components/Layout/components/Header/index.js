import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/img';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tikTok" />
                </div>
                <Tippy
                    visible={true}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('label')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>
                    <Button primary>
                        <span>Login</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
