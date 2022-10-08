import classNames from 'classnames/bind';

import styles from './Body.module.scss';
import lofi from '~/assets/images/post-image.webp';
import Image from '~/components/Image';
import Post from '~/components/Post';

const cx = classNames.bind(styles);

const gallery_image = [lofi, lofi, lofi];

function Body({ info_data, ratingRef }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container__box', 'intro')}>
                    <div className={cx('title')}>Intro</div>
                    <div className={cx('intro__bio')}>
                        <span>Dev from TDTU</span>
                    </div>
                    <hr />
                    <div className={cx('intro__birtday')}>
                        <i className={cx('fa-thin', 'fa-cake-candles')}></i>
                        <div className={cx('info')}>
                            <p>February 11</p>
                            <span>Birthday</span>
                        </div>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('container__box', 'post')}>
                        {/* <div className={cx('post__title')}>
                            <span className={cx('title')}>Infomation</span>
                            <div className={cx('info__action')}>
                                <i
                                    className={cx('fa-regular', 'fa-ellipsis')}
                                ></i>
                            </div>
                        </div>
                        <div
                            ref={ref}
                            key={key}
                            className={cx('info__caption')}
                        >
                            {clampedText}
                            {text && (
                                <span
                                    className={cx('btn-toggle')}
                                    onClick={toggleExpanded}
                                >
                                    {noClamp || `...See more`}
                                </span>
                            )}
                        </div>
                        <div className={cx('info__gallery')}>
                            {gallery_image.map((data, index) => {
                                const count = gallery_image.length - 4;
                                if (gallery_image.length === 1) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__1')}
                                        >
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (gallery_image.length === 2) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__2')}
                                        >
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (gallery_image.length === 3) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__3')}
                                        >
                                            <img src={data} alt='' />
                                        </div>
                                    );
                                } else if (index < 3) {
                                    return (
                                        <img key={index} src={data} alt='' />
                                    );
                                } else if (index === 3) {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('image__more')}
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data})`,
                                            }}
                                        >
                                            <span
                                                className={cx('image__count')}
                                            >
                                                +{count}
                                            </span>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div> */}
                        <Post
                            avatar
                            name={'Ton Duc Thang'}
                            faculty={'Information Technology'}
                            caption={'In publishing and graphic design hehe'}
                            photo={gallery_image}
                            likeCount={4}
                            commentCount={2}
                            commentContent={'Hello'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
