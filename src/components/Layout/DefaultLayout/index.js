import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Fragment } from 'react';

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
