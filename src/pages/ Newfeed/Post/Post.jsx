/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShare,
	faHeart as heartIcon,
	faSmile,
	faCamera,
	faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import Menu from '~/components/Popper/Menu';
import styles from './Post.module.scss';
import Image from '~/components/Image';

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
	const [openComment, setOpenComment] = useState(false);
	const [openOption, setOpenOption] = useState(false);

	const handleOpenOption = () => {
		setOpenOption(!openOption);
	};

	// open comment and focus on comment input
	const focusCommentInputRef = useRef();
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
				<div className={cx('heading')}>
					<div className={cx('personally')}>
						<Image className={cx('avatar')} src={avatar} />
						<div className={cx('info')}>
							<span className={cx('info__name')}>{name}</span>
							<span className={cx('info__facutly')}>{faculty}</span>
						</div>
					</div>

					<Menu interactive open={openOption}>
						<div
							className={cx('option')}
							onClick={() => {
								handleOpenOption();
							}}
						>
							<FontAwesomeIcon icon={faEllipsis} />
						</div>
					</Menu>
				</div>
				{caption && <p className={cx('caption')}>{caption}</p>}
			</div>

			<div className={cx('photo')}>
				{photo && <img src={photo} alt='photo' />}
			</div>

			<div className={cx('interac')}>
				<div className={cx('interac__react')}>
					<div className={cx('interac_react-like')}>
						<FontAwesomeIcon icon={heartIcon} />
					</div>

					<div className={cx('interac_react-count')}>
						{likeCount > 1 && <span>{likeCount}</span>}
					</div>
				</div>
				{commentCount > 0 && (
					<div className={cx('interac__comment-count')}>
						{commentCount} comments
					</div>
				)}
			</div>

			<hr />

			<div className={cx('interacting')}>
				<div className={cx('interacting__handle')}>
					<FontAwesomeIcon icon={faHeart} />
					<span className={cx('interacting__handle-text')}>Like</span>
				</div>

				<div
					className={cx('interacting__handle')}
					onClick={handleClickOpenComment}
				>
					<FontAwesomeIcon icon={faComment} />
					<span className={cx('interacting__handle-text')}>Comment</span>
				</div>

				<div className={cx('interacting__handle')}>
					<FontAwesomeIcon icon={faShare} />
					<span className={cx('interacting__handle-text')}>Share</span>
				</div>
			</div>

			<hr />

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
								<FontAwesomeIcon className={cx('icon__item')} icon={faSmile} />
								<FontAwesomeIcon className={cx('icon__item')} icon={faCamera} />
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
