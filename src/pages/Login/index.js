import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import logo from '~/assets/icons/logo.png';
import loginVector from '~/assets/icons/login.png';
import LoginForm from './LoginForm';

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
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
