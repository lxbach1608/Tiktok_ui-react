import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import Styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(Styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleClickOutside = () => {
        setShow(false);
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setResults([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setResults(res.data);
                setLoading(false);
            })
            .catch((err) => setLoading(false));
    }, [debounced]);

    return (
        <TippyHeadless
            visible={show && results.length > 0}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('label')}>Accounts</h4>
                        {results.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
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
                    {!!searchValue && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
                </button>
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
