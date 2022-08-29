import classNames from 'classnames/bind';

import styles from './Newfeed.module.scss';
import CreatePost from './CreatePost';
import Post from './Post';

const cx = classNames.bind(styles);

function Newfeed() {
	return (
		<div className={cx('wrapper')}>
			<CreatePost />
			<Post />
		</div>
	);
}

export default Newfeed;
