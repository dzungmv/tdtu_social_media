import classNames from 'classnames/bind';
import { Tooltip } from 'react-tippy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import styles from './Post.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header({ avatar, name, faculty }) {
    return (
        <div className={cx('heading')}>
            <div className={cx('personally')}>
                <Image className={cx('avatar')} src={avatar.toString()} />

                <div className={cx('info')}>
                    <span className={cx('info__name')}>{name}</span>
                    <span className={cx('info__facutly')}>{faculty}</span>
                </div>
            </div>

            <Tooltip
                interactive
                trigger='click'
                position='bottom-end'
                html={
                    <div className={cx('tool-tip')}>
                        <Button
                            className={cx('tool-tip__btn')}
                            leftIcon={
                                <i className={cx('fa-regular', 'fa-pen')}></i>
                            }
                        >
                            Edit post
                        </Button>

                        <Button
                            className={cx('tool-tip__btn')}
                            leftIcon={
                                <i className={cx('fa-regular', 'fa-trash')}></i>
                            }
                        >
                            Delete post
                        </Button>

                        <Button
                            className={cx('tool-tip__btn')}
                            leftIcon={
                                <i className={cx('fa-regular', 'fa-flag')}></i>
                            }
                        >
                            Report post
                        </Button>
                    </div>
                }
            >
                <div className={cx('option')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </Tooltip>
        </div>
    );
}

export default Header;
