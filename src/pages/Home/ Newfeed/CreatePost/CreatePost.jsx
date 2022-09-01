import classNames from 'classnames/bind';

import styles from './CreatePost.module.scss';
import Image from '~/components/Image';
import photo from '~/assets/icons/photos.png';
import feeling from '~/assets/icons/feeling.png';

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
						<span className={cx('input')}>What's is your mind?</span>
					</div>
				</div>
				<hr />
				<div className={cx('footer')}>
					<div className={cx('footer-item')}>
						<img className={cx('icon')} src={photo} alt='photos' />
						<span>Photo/video</span>
					</div>

					<div className={cx('footer-item')}>
						<img className={cx('icon')} src={feeling} alt='feeling' />
						<span>Felling/Activity</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
