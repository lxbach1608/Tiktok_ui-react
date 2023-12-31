import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import images from '~/assets/img';
import Styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Fragment } from 'react';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, NotificationIcon } from '~/components/Icons';
import Search from '../Search';
import { faBookmark, faCircleQuestion, faKeyboard, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faGear, faLanguage, faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faLanguage} />,
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
    {
        title: 'Dark mode',
        icon: <FontAwesomeIcon icon={faMoon} />,
    },
];

const MENU_USER = [
    {
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        title: 'Favorites',
        icon: <FontAwesomeIcon icon={faBookmark} />,
    },
    {
        title: 'Get Coins',
        icon: <FontAwesomeIcon icon={faTiktok} />,
    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGear} />,
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faSignOut} />,
        separate: true,
    },
];

// Handle logic change items
const handleChangeItem = (menuItem) => {
    console.log(menuItem);
};

function Header() {
    const isUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tikTok" />
                </div>

                <Search />

                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>
                    {isUser ? (
                        <Fragment>
                            <Tippy content="Messages">
                                <button className={cx('user-icon')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('user-icon')}>
                                    <NotificationIcon />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button primary>
                                <span>Log in</span>
                            </Button>
                        </Fragment>
                    )}

                    <Menu items={isUser ? MENU_USER : MENU_ITEMS} onChange={handleChangeItem}>
                        {isUser ? (
                            <img
                                className={cx('avt')}
                                alt="Bách lê"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7141780254112251931~c5_720x720.jpeg?x-expires=1690905600&x-signature=wdlVkYJDAj1t9PoMHC3B5i1Zcv8%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
