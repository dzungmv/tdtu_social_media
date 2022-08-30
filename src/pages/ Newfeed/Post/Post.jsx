import classNames from 'classnames/bind';

import styles from './Post.module.scss';
import Image from '~/components/Image';
import catlofi from '~/assets/images/post-image.webp';

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
			dov
		</div>
	);
}

export default Post;
