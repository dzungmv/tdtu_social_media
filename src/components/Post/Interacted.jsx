import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartIcon } from '@fortawesome/free-solid-svg-icons';

import styles from './Post.module.scss';
const cx = classNames.bind(styles);

function Interacted({ likeCount, commentCount }) {
	return (
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
	);
}

export default Interacted;
