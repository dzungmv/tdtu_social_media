/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
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
				{caption && <p className={cx('caption')}>{caption}</p>}
			</div>

			<div className={cx('photo')}>
				{photo && <img src={photo} alt='photo' />}
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
					<span className={cx('interacting__handle-text')}>Comment</span>
				</div>

				<div className={cx('interacting__handle')}>
					<i className={cx('fal', 'fa-share')}></i>
					<span className={cx('interacting__handle-text')}>Share</span>
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
									className={cx('fa-light', 'fa-face-smile', 'icon__item')}
								></i>
								<i className={cx('fa-light', 'fa-camera', 'icon__item')}></i>
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
								<span className={cx('comment__section-content-name')}>
									{name}
								</span>

								<p className={cx('comment__section-content-text')}>
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
