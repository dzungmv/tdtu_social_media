import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import emailLogo from '~/assets/icons/email.png';

const cx = classNames.bind(styles);

function ForgotForm({ setForm }) {
	const handleClick = () => {
		setForm(true);
	};
	return (
		<div className={cx('forgot__container')}>
			<button className={cx('forgot__back')} onClick={handleClick}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<input
				className={cx('login__control', 'login__input')}
				placeholder='Enter your username'
			/>
			<button className={cx('login__control', 'login__btn')}>Submit</button>
			<hr />
			<div className={cx('forgot__contact')}>
				<span>If you have any problem, please contact us abc@gmail.com</span>
				<img src={emailLogo} className={cx('fogort__email-icon')} alt='Email' />
			</div>
		</div>
	);
}

export default ForgotForm;
