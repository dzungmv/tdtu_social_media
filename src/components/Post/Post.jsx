/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { useClampText } from 'use-clamp-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import styles from './Post.module.scss';
import Image from '~/components/Image';
import Header from './Header';
import Interacted from './Interacted';

const cx = classNames.bind(styles);

function Post({
    avatar,
    name,
    faculty,
    caption,
    photo,
    likeCount,
    commentCount,
    commentContent,
}) {
    //* Truncate text
    const _text = caption;
    const [text] = useState(_text);
    const [expanded, setExpanded] = useState(false);
    const [ref, { noClamp, clampedText, key }] = useClampText({
        text,
        lines: 6,
        ellipsis: 100,
        expanded,
    });
    const toggleExpanded = () => setExpanded((state) => !state);
    const focusCommentInputRef = useRef();

    const [liked, setLiked] = useState('');

    // Handle check liked
    const handleClickLiked = (e) => {
        setLiked(liked === '' ? 'liked' : '');
    };

    const [openComment, setOpenComment] = useState(false);

    // open comment and focus on comment input

    const handleClickOpenComment = () => {
        setOpenComment(!openComment);
    };
    useEffect(() => {
        if (openComment) {
            focusCommentInputRef.current.focus();
        }
    }, [openComment]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Header avatar={avatar} name={name} faculty={faculty} />
                {caption && (
                    <div ref={ref} key={key} className={cx('caption')}>
                        {clampedText}
                        {{ caption } && (
                            <span
                                className={cx('btn-toggle')}
                                onClick={toggleExpanded}
                            >
                                {noClamp || `...See more`}
                            </span>
                        )}
                    </div>
                )}
            </div>

            <div className={cx('photo')}>
                {photo && (
                    <div className={cx('info__gallery')}>
                        {photo.map((data, index) => {
                            const count = photo.length - 4;
                            if (photo.length === 1) {
                                return (
                                    <div key={index} className={cx('image__1')}>
                                        <img src={data} alt='' />
                                    </div>
                                );
                            } else if (photo.length === 2) {
                                return (
                                    <div key={index} className={cx('image__2')}>
                                        <img src={data} alt='' />
                                    </div>
                                );
                            } else if (photo.length === 3) {
                                return (
                                    <div key={index} className={cx('image__3')}>
                                        <img src={data} alt='' />
                                    </div>
                                );
                            } else if (index < 3) {
                                return <img key={index} src={data} alt='' />;
                            } else if (index === 3) {
                                if (count > 0) {
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
                                }
                                return <img key={index} src={data} alt='' />;
                            } else {
                                return null;
                            }
                        })}
                    </div>
                )}
            </div>

            <Interacted likeCount={likeCount} commentCount={commentCount} />

            <hr />

            {/* Interacting */}
            <div className={cx('interacting')}>
                <div
                    className={cx('interacting__handle', { liked })}
                    onClick={handleClickLiked}
                >
                    <i className={cx('fa-light', 'fa-heart')}></i>
                    <span className={cx('interacting__handle-text')}>Like</span>
                </div>

                <div
                    className={cx('interacting__handle')}
                    onClick={handleClickOpenComment}
                >
                    <i className={cx('fa-light', 'fa-comment')}></i>
                    <span className={cx('interacting__handle-text')}>
                        Comment
                    </span>
                </div>

                <div className={cx('interacting__handle')}>
                    <i className={cx('fal', 'fa-share')}></i>
                    <span className={cx('interacting__handle-text')}>
                        Share
                    </span>
                </div>
            </div>

            {openComment && <hr />}

            {openComment && (
                <div className={cx('comment')}>
                    <div className={cx('comment__commenting')}>
                        <Image className={cx('avatar')} src={avatar} />
                        <div className={cx('comment__commenting-input')}>
                            <input
                                ref={focusCommentInputRef}
                                className={cx('input')}
                                placeholder='Write a comment...'
                            />
                            <div className={cx('icon')}>
                                <i
                                    className={cx(
                                        'fa-light',
                                        'fa-face-smile',
                                        'icon__item'
                                    )}
                                ></i>
                                <i
                                    className={cx(
                                        'fa-light',
                                        'fa-camera',
                                        'icon__item'
                                    )}
                                ></i>
                            </div>
                        </div>
                    </div>

                    {/* Comment user */}

                    {commentContent && (
                        <div className={cx('comment__section')}>
                            <div>
                                <Image src={avatar} className={cx('avatar')} />
                            </div>
                            <div className={cx('comment__section-content')}>
                                <span
                                    className={cx(
                                        'comment__section-content-name'
                                    )}
                                >
                                    {name}
                                </span>

                                <p
                                    className={cx(
                                        'comment__section-content-text'
                                    )}
                                >
                                    {commentContent}
                                </p>
                            </div>

                            <div className={cx('menu')}>
                                <div className={cx('menu__icon')}>
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Post;
