import classNames from 'classnames/bind';

import Sidebar from '../Sidebar';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('sidebar')}>
				<Sidebar />
			</div>

			<div className={cx('newfeed')}>This is new feed!</div>

			<div className={cx('notication')}>This is notification</div>
		</div>
	);
}

export default Home;
