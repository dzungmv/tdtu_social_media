import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Tooltipes() {
    return (
        <div className={cx('tooltip')}>
            <div className={cx('tooltip-container')}>
                <Link to={'/profile'}>
                    <div className={cx('tooltip__item', 'profile')}>
                        <Image className={cx('avatar')} src='' />
                        <div className={cx('info')}>
                            <span className={cx('name')}>Ton Duc Thang</span>
                            <span className={cx('id')}>
                                Student ID:
                                <span className={cx('student__id')}>
                                    51201234
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>

                <div className={cx('tooltip__item')}>
                    <div className={cx('tooltip__item--icon')}>
                        <i className={cx('fa-regular', 'fa-gear')}></i>
                    </div>
                    <span className={cx('tooltip__item--label')}>
                        Setting and privacy
                    </span>
                </div>

                <div className={cx('tooltip__item')}>
                    <div className={cx('tooltip__item--icon')}>
                        <i
                            className={cx(
                                'fa-regular',
                                'fa-comment-exclamation'
                            )}
                        ></i>
                    </div>
                    <span className={cx('tooltip__item--label')}>
                        Give feedback
                    </span>
                </div>

                <Link to='/login'>
                    <div
                        className={cx('tooltip__item', 'tooltip__item--logout')}
                    >
                        <div className={cx('tooltip__item--icon')}>
                            <i
                                className={cx(
                                    'fa-regular',
                                    'fa-right-from-bracket'
                                )}
                            ></i>
                        </div>
                        <span className={cx('tooltip__item--label')}>
                            Log out
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Tooltipes;
