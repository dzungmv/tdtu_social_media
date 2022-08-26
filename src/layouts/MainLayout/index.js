import Header from '~/layouts/components/Header';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header active />
			<div className={cx('container')}>
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	);
}

export default MainLayout;
