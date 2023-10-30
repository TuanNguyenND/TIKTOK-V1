import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>{label}</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <button className={cx('see-more')}>
                <p className={cx('see-more-p')}>See more</p>
            </button>
        </div>
    );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
