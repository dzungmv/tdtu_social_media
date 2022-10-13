import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css';

import config from '~/config';
import styles from './Header.module.scss';
import logo from '~/assets/icons/logo.png';
import Profile from './Profile';
import Notifications from './Notification/Notifications';
import Search from '../Search';
import Control from '../Control';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home}>
                    <img className={cx('logo__img')} src={logo} alt='TDT' />
                </Link>

                <Search />
            </div>

            <Control active />

            <div className={cx('action')}>
                <Tippy
                    content={<Notifications />}
                    trigger='click'
                    placement='bottom-start'
                    interactive
                    arrow={false}
                    animation='scale'
                    theme='light'
                >
                    <div className={cx('action__wrapper')}>
                        <button className={cx('action__item')}>
                            <i className={cx('fa-solid', 'fa-bell')}></i>
                            <span className={cx('action__count')}>12</span>
                        </button>
                    </div>
                </Tippy>

                <Tippy
                    content='Messenger'
                    placement='bottom'
                    animation='perspective'
                >
                    <Link to={'/messenger'}>
                        <div className={cx('action__wrapper')}>
                            <button className={cx('action__item')}>
                                <i
                                    className={cx(
                                        'fa-brands',
                                        'fa-facebook-messenger'
                                    )}
                                ></i>
                                <span className={cx('action__count')}>12</span>
                            </button>
                        </div>
                    </Link>
                </Tippy>

                <Profile />
            </div>
        </header>
    );
}

export default Header;
