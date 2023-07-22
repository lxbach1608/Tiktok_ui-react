import Header from '../components/Header';
import { Fragment } from 'react';

function HeaderOnly({ children }) {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </Fragment>
    );
}

export default HeaderOnly;
