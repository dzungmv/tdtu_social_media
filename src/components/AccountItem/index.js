import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
	return (
		<Link to={`/@${data.nickname}`} className={cx('wrapper')}>
			<Image className={cx('avatar')} src={data.avatar} alt='avatar' />
			<div className={cx('info')}>
				<h4 className={cx('info__name')}>{data.full_name}</h4>
				<span className={cx('info__faculty')}>{data.nickname}</span>
			</div>
		</Link>
	);
}

export default AccountItem;
