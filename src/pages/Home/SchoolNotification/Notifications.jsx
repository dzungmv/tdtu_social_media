import classNames from 'classnames/bind';

import styles from './SchoolNotification.module.scss';

const cx = classNames.bind(styles);

function Notications({ title, time }) {
	return (
		<div className={cx('noti-item')}>
			<span className={cx('noti-item__title')}>{title}</span>

			<span className={cx('noti-item__time')}>{time}</span>
		</div>
	);
}

export default Notications;
