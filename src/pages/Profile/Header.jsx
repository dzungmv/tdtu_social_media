import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import cover_photo from '~/assets/images/post-image.webp';

const friend_data = [
    cover_photo,
    cover_photo,
    cover_photo,
    cover_photo,
    cover_photo,
    cover_photo,
    cover_photo,
];

const cx = classNames.bind(styles);

function Header({ exeScrollRating }) {
    return (
        <div className={cx('header')}>
            <div className={cx('header__container')}>
                <div className={cx('cover__photo')}>
                    <img src={cover_photo} alt='' />
                </div>
                <div className={cx('avatar')}>
                    <div className={cx('avatar__image')}>
                        <img src={cover_photo} alt='' />
                    </div>
                </div>

                <div className={cx('info')}>
                    <div className={cx('info__left')}>
                        <div className={cx('name')}>
                            <span>Ton Duc Thang</span>
                        </div>
                        <div className={cx('count__friend')}>242 friends</div>
                        <div className={cx('friends')}>
                            {friend_data.map((data, index) => {
                                return index < 5 ? (
                                    <img key={index} src={data} alt='' />
                                ) : index === 5 ? (
                                    <div
                                        key={index}
                                        className={cx('friends-image')}
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data})`,
                                        }}
                                    >
                                        <i
                                            className={cx(
                                                'fa-regular',
                                                'fa-ellipsis'
                                            )}
                                        ></i>
                                    </div>
                                ) : null;
                            })}
                        </div>
                    </div>

                    <div className={cx('info__right')}>
                        <div className={cx('info__action')}>
                            <div className={cx('info__action-btn')}>
                                <i
                                    className={cx('fa-solid', 'fa-circle-plus')}
                                ></i>
                                Add to Post
                            </div>
                            <div className={cx('info__action-btn')}>
                                <i className={cx('fa-solid', 'fa-pen')}></i>
                                Edit Profile
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={cx('navigation')}>
                    <div className={cx('navigation__item')}>Introduction</div>
                    <div
                        className={cx('navigation__item')}
                        onClick={exeScrollRating}
                    >
                        Rating
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
