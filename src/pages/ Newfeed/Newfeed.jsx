import classNames from 'classnames/bind';

import styles from './Newfeed.module.scss';
import CreatePost from './CreatePost';

const cx = classNames.bind(styles);

function Newfeed() {
	return (
		<div className={cx('wrapper')}>
			<CreatePost />
		</div>
	);
}

export default Newfeed;
