import classNames from 'classnames/bind';

import styles from './Post.module.scss';
import Image from '~/components/Image';
import catlofi from '~/assets/images/post-image.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShare,
	faHeart as heartIcon,
	faSmile,
	faCamera,
	faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Post() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('container')}>
				<div className={cx('heading')}>
					<Image className={cx('avatar')} src='' />
					<div className={cx('info')}>
						<span className={cx('info__name')}>Nguyen Van A</span>
						<span className={cx('info__facutly')}>Cong nghe thong tin</span>
					</div>
				</div>
				<p className={cx('caption')}>Lorem Ipsum is simply dummy text...</p>
			</div>
			<img className={cx('image')} src={catlofi} alt='post-img' />

			<div className={cx('interac')}>
				<div className={cx('interac__react')}>
					<div className={cx('interac_react-like')}>
						<FontAwesomeIcon icon={heartIcon} />
					</div>

					<div className={cx('interac_react-count')}>
						<span>12</span>
					</div>
				</div>
				<div className={cx('interac__comment-count')}>12 comments</div>
			</div>

			<hr />

			<div className={cx('interacting')}>
				<div className={cx('interacting__handle')}>
					<FontAwesomeIcon icon={faHeart} />
					<span className={cx('interacting__handle-text')}>Like</span>
				</div>

				<div className={cx('interacting__handle')}>
					<FontAwesomeIcon icon={faComment} />
					<span className={cx('interacting__handle-text')}>Comment</span>
				</div>

				<div className={cx('interacting__handle')}>
					<FontAwesomeIcon icon={faShare} />
					<span className={cx('interacting__handle-text')}>Share</span>
				</div>
			</div>

			<hr />

			<div className={cx('comment')}>
				<div className={cx('comment__commenting')}>
					<Image className={cx('avatar')} src='' />
					<div className={cx('comment__commenting-input')}>
						<input className={cx('input')} placeholder='Write a comment...' />
						<div className={cx('icon')}>
							<FontAwesomeIcon className={cx('icon__item')} icon={faSmile} />
							<FontAwesomeIcon className={cx('icon__item')} icon={faCamera} />
						</div>
					</div>
				</div>

				{/* Comment user */}

				<div className={cx('comment__section')}>
					<div>
						<Image src='' className={cx('avatar')} />
					</div>
					<div className={cx('comment__section-content')}>
						<span className={cx('comment__section-content-name')}>
							Ton Duc Thang
						</span>

						<p className={cx('comment__section-content-text')}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>

					<div className={cx('menu')}>
						<div className={cx('menu__icon')}>
							<FontAwesomeIcon icon={faEllipsis} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
