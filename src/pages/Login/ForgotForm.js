import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function ForgotForm() {
	return (
		<div className={cx('forgot__container')}>
			<input
				className={cx('login__control', 'login__input')}
				placeholder='Enter your username'
			/>
			<button className={cx('login__control', 'login__btn')}>Submit</button>
		</div>
	);
}

export default ForgotForm;
