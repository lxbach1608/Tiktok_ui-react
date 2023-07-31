import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import Styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const cx = classNames.bind(Styles);

function Search() {
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [show, setShow] = useState(true);

    const inputRef = useRef();

    const handleClickOutside = () => {
        setShow(false);
    };

    setTimeout(() => {
        setResults([1, 2, 3]);
    }, 500);

    return (
        <TippyHeadless
            visible={show && results.length > 0}
            placement="bottom-end"
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
            onClickOutside={handleClickOutside}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search accounts and videos"
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={(e) => setShow(true)}
                />
                <button
                    className={cx('clear')}
                    onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus();
                    }}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
