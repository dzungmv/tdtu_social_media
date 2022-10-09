import classNames from 'classnames/bind';

import styles from './Body.module.scss';
import lofi from '~/assets/images/post-image.webp';
import Post from '~/components/Post';

const cx = classNames.bind(styles);

const gallery_image = [lofi, lofi, lofi];

function Body() {
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
