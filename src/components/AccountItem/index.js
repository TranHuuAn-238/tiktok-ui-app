import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://cdn.dribbble.com/users/5332077/screenshots/19243912/media/4fe82252d1689190325d08df691dae31.gif"
                alt="user avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Hoang Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@nguyenhoangAnh</span>
            </div>
        </div>
    );
}

export default AccountItem;