import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/svg-arrow.css';

import styles from './Messenger.module.scss';
import Image from '~/components/Image';
import Tooltipes from './ActionTippy';

const cx = classNames.bind(styles);

function Messenger() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container__left')}>
                    <div className={cx('container__left--header')}>
                        <span>Chats</span>
                    </div>

                    <div className={cx('messenger')}>
                        <div className={cx('messenger__item')}>
                            <div className={cx('messenger__item--avatar')}>
                                <Image src={''} />
                            </div>
                            <div className={cx('messenger__item--content')}>
                                <div className={cx('info')}>
                                    <div className={cx('info__name')}>
                                        Ton Duc Thang
                                    </div>
                                    <div className={cx('info__mess')}>
                                        You're friend on facebook
                                    </div>
                                </div>
                            </div>
                            <Tippy
                                arrow={true}
                                content={<Tooltipes />}
                                placement='bottom'
                                interactive
                                theme='light'
                                trigger='click'
                            >
                                <div className={cx('action')}>
                                    <div className={cx('action__btn')}>
                                        <i
                                            className={cx(
                                                'fa-regular',
                                                'fa-ellipsis'
                                            )}
                                        ></i>
                                    </div>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
                <div className={cx('container__right')}>
                    <div className={cx('container__right--header')}>
                        <div className={cx('user')}>
                            <div className={cx('user__avatar')}>
                                <Image src={''} />
                            </div>

                            <div className={cx('user__name')}>
                                Ton Duc Thang
                            </div>
                        </div>
                    </div>

                    <div className={cx('messenger__container')}>
                        <div className={cx('messenger__container--heading')}>
                            <div className={cx('avatar')}>
                                <Image src={''} />
                            </div>
                            <div className={cx('name')}>Ton Duc Thang</div>
                            <div className={cx('des')}>
                                You aren't friends on Ton Duc Thang University
                            </div>
                        </div>
                    </div>

                    <div className={cx('container__right--footer')}>Alo</div>
                </div>
            </div>
        </div>
    );
}

export default Messenger;
