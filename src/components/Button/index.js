import Styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function Button({
    children,
    to,
    href,
    onClick,
    small,
    large,
    full_width,
    primary,
    outline,
    leftIcon,
    rightIcon,
    className,
    passProps,
}) {
    var Comp = 'button';

    var classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        leftIcon,
        rightIcon,
        full_width,
        [className]: className,
    });

    var props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
