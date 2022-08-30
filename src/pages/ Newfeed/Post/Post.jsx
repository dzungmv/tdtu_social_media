import classNames from 'classnames/bind';

import styles from './Post.module.scss';
import Image from '~/components/Image';
import catlofi from '~/assets/images/post-image.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShare,
	faHeart as heartIcon,
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
		</div>
	);
}

export default Post;
