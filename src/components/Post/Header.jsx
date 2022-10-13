import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import styles from './Post.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header({ avatar, name, faculty }) {
    return (
        <div className={cx('heading')}>
            <div className={cx('personally')}>
                <Image className={cx('avatar')} src={avatar} />

                <div className={cx('info')}>
                    <span className={cx('info__name')}>{name}</span>
                    <span className={cx('info__facutly')}>{faculty}</span>
                </div>
            </div>

            <Tippy
                content={
                    <div className={cx('tooltip')}>
                        <div className={cx('tooltip__item')}>
                            <i className={cx('fa-regular', 'fa-pen')}></i>
                            <span>Edit post</span>
                        </div>
                        <div className={cx('tooltip__item')}>
                            <i className={cx('fa-regular', ' fa-trash')}></i>
                            <span>Delete post</span>
                        </div>
                        <div className={cx('tooltip__item')}>
                            <i
                                className={cx(
                                    'fa-regular',
                                    ' fa-message-exclamation'
                                )}
                            ></i>
                            <span>Report</span>
                        </div>
                    </div>
                }
                placement='bottom'
                trigger={'click'}
                theme='light'
                interactive
            >
                <div className={cx('option')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </Tippy>
        </div>
    );
}

export default Header;
