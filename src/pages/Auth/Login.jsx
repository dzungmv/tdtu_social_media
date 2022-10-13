import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '~/assets/icons/logo.png';
import loginVector from '~/assets/icons/login.png';
import googleIcon from '~/assets/icons/google.png';
import tip_image from '~/assets/images/tip.png';

const cx = classNames.bind(styles);

function Login() {
    const notify = () => toast('Demo toast message!');
    return (
        <>
            <ToastContainer />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('features')}>
                        <img src={logo} className={cx('logo')} alt='logo' />
                        <div className={cx('icon')}>
                            <img
                                className={cx('icon__item')}
                                src={loginVector}
                                alt='login vector'
                            />
                        </div>
                    </div>

                    <div className={cx('login')}>
                        <div className={cx('login__control')}>
                            <div className={cx('login__btn')} onClick={notify}>
                                <div className={cx('google__icon')}>
                                    <img
                                        className={cx('footer__google-icon')}
                                        src={googleIcon}
                                        alt='google-icon'
                                    />
                                </div>

                                <div className={cx('login__btn-label')}>
                                    Sign in with Google
                                </div>
                            </div>
                        </div>

                        <div className={cx('footer')}>
                            <div className={cx('footer__tip')}>
                                <img src={tip_image} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
