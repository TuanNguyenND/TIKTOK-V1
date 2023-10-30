import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <a href="/">
                <div className={cx('avatar')}>
                    <span className={cx('avatar-span')}>
                        <img
                            className={cx('avatar-img')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/db93d67e698a6fb42c82be5764319ce4.jpeg?x-expires=1698102000&x-signature=T0s335EfhHK0gJkOBem5wUXjCZU%3D"
                            alt=""
                        />
                    </span>
                </div>
            </a>
            <a className={cx('item-info')} href="/">
                <div className={cx('nickname')}>
                    <span className={cx('nickname-span')}>Tuan Nguyen</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </div>

                <p className={cx('name')}>Nguyễn Quốc Tuấn</p>
            </a>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
