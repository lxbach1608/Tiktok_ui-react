import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Fragment } from 'react';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
