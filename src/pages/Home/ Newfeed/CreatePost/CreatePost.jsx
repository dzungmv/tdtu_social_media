import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CreatePost.module.scss';
import Image from '~/components/Image';
import Modal from '~/components/Modal';
import photo from '~/assets/icons/photos.png';
import feeling from '~/assets/icons/feeling.png';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const customImgAvt = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cotain',
    marginRight: 8,
};

function CreatePost() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Image src='' style={customImgAvt} />
                    <div
                        className={cx('input-wrapper')}
                        onClick={handleShowModal}
                    >
                        <span className={cx('input', 'text')}>
                            What's is your mind?
                        </span>
                    </div>

                    <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        title='Create post'
                    >
                        <div className={cx('modal')}>
                            <div className={cx('heading')}>
                                <Image
                                    src=''
                                    alt='avatar'
                                    className={cx('heading__avatar')}
                                />
                                <div className={cx('info')}>
                                    <span className={cx('info__name')}>
                                        Ton Duc Thang
                                    </span>
                                    <span className={cx('info__faculty')}>
                                        Faculty
                                    </span>
                                </div>
                            </div>

                            <div className={cx('content')}>
                                <textarea
                                    placeholder='Write something'
                                    className={cx('content__text')}
                                ></textarea>
                            </div>

                            <div className={cx('footer')}>
                                <Button primary className={cx('footer__btn')}>
                                    Post
                                </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
                <hr />
                <div className={cx('footer')}>
                    <div className={cx('footer-item')}>
                        <img className={cx('icon')} src={photo} alt='photos' />
                        <span className={cx('text')}>Photo/video</span>
                    </div>

                    <div className={cx('footer-item')}>
                        <img
                            className={cx('icon')}
                            src={feeling}
                            alt='feeling'
                        />
                        <span className={cx('text')}>Felling/Activity</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
