import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import avatar from '~/assets/images/avatar.jpg';

const cx = classNames.bind(styles);

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<img className={cx('avatar')} src={avatar} alt='avatar' />
			<div className={cx('info')}>
				<h4 className={cx('info__name')}>Nguyen Van A</h4>
				<span className={cx('info__faculty')}>Cong nghe thong tin</span>
			</div>
		</div>
	);
}

export default AccountItem;
