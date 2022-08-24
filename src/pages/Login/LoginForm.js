import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import googleIcon from '~/assets/icons/google.png';

const cx = classNames.bind(styles);

function LoginForm({ setForm }) {
	const handleClick = () => {
		setForm(false);
	};
	return (
		<div>
			<input
				className={cx('login__control', 'login__input')}
				placeholder='Email'
			/>
			<input
				className={cx('login__control', 'login__input')}
				type='password'
				placeholder='Password'
			/>
			<button className={cx('login__control', 'login__btn')}>Sign In</button>

			<div className={cx('login__forgot')} onClick={handleClick}>
				<span>Forgotten password?</span>
			</div>

			<hr />

			<div className={cx('footer')}>
				<span>Or sign in with</span>
				<a href='/'>
					<img
						className={cx('footer__google-icon')}
						src={googleIcon}
						alt='google-icon'
					/>
				</a>
			</div>
		</div>
	);
}

export default LoginForm;
