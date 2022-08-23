import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import googleIcon from '~/assets/icons/google.png';
import logo from '~/assets/icons/logo.png';
import loginVector from '~/assets/icons/login.png';

const cx = classNames.bind(styles);

function Login() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('grid', 'wide')}>
				<div className={cx('row', 'container')}>
					<div className={cx('col', 'l-7', 'features')}>
						<img src={logo} className={cx('logo')} alt='logo' />
						<div className={cx('icon')}>
							<img
								className={cx('icon__item')}
								src={loginVector}
								alt='login vector'
							/>
						</div>
					</div>
					<div className={cx('col', 'l-5', 'login')}>
						<input
							className={cx('login__control', 'login__input')}
							placeholder='Email'
						/>
						<input
							className={cx('login__control', 'login__input')}
							type='password'
							placeholder='Password'
						/>
						<button className={cx('login__control', 'login__btn')}>
							Sign In
						</button>

						<a href='/' className={cx('login__forgot')}>
							<span>Forgotten password?</span>
						</a>

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
				</div>
			</div>
		</div>
	);
}

export default Login;
