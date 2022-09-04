import classNames from 'classnames/bind';

import styles from './CreatePost.module.scss';
import Image from '~/components/Image';
import photo from '~/assets/icons/photos.png';
import feeling from '~/assets/icons/feeling.png';
import { text } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

const customImgAvt = {
	width: 40,
	height: 40,
	borderRadius: '50%',
	objectFit: 'cotain',
	marginRight: 8,
};

function CreatePost() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('container')}>
				<div className={cx('content')}>
					<Image src='' style={customImgAvt} />
					<div className={cx('input-wrapper')}>
						<span className={cx('input', 'text')}>What's is your mind?</span>
					</div>
				</div>
				<hr />
				<div className={cx('footer')}>
					<div className={cx('footer-item')}>
						<img className={cx('icon')} src={photo} alt='photos' />
						<span className={cx('text')}>Photo/video</span>
					</div>

					<div className={cx('footer-item')}>
						<img className={cx('icon')} src={feeling} alt='feeling' />
						<span className={cx('text')}>Felling/Activity</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
