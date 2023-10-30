import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '../../../components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: (
            <svg
                className={cx('live-creator-hub-a-svg')}
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6667 13.2748C11.6667 12.6798 11.9838 12.13 12.4988 11.8321C13.9977 10.965 15 9.34859 15 7.49998C15 4.73856 12.7614 2.49998 10 2.49998C7.23859 2.49998 5.00001 4.73856 5.00001 7.49998C5.00001 9.34859 6.00237 10.965 7.50122 11.8321C8.01621 12.13 8.33334 12.6798 8.33334 13.2748V14.7916C8.33334 14.9067 8.42662 15 8.54168 15H11.4583C11.5734 15 11.6667 14.9067 11.6667 14.7916V13.2748ZM13.3333 13.2748V15.8333C13.3333 16.2935 12.9602 16.6666 12.5 16.6666H7.50001C7.03977 16.6666 6.66668 16.2935 6.66668 15.8333V13.2748C4.67401 12.1221 3.33334 9.96759 3.33334 7.49998C3.33334 3.81808 6.31811 0.833313 10 0.833313C13.6819 0.833313 16.6667 3.81808 16.6667 7.49998C16.6667 9.96759 15.326 12.1221 13.3333 13.2748Z"
                ></path>
                <path d="M7.50001 17.9166C7.50001 17.6865 7.68656 17.5 7.91668 17.5H12.0833C12.3135 17.5 12.5 17.6865 12.5 17.9166V18.75C12.5 18.9801 12.3135 19.1666 12.0833 19.1666H7.91668C7.68656 19.1666 7.50001 18.9801 7.50001 18.75V17.9166Z"></path>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.46401 4.45524C8.67291 4.3393 8.92711 4.34959 9.12639 4.48207L12.8301 6.94419C13.014 7.06647 13.125 7.27561 13.125 7.49998C13.125 7.72435 13.014 7.93349 12.8301 8.05576L9.12639 10.5179C8.92711 10.6504 8.67291 10.6607 8.46401 10.5447C8.2551 10.4288 8.12501 10.2052 8.12501 9.9621V5.03786C8.12501 4.79477 8.2551 4.57119 8.46401 4.45524ZM11.2876 7.49998L9.42131 8.74062V6.25934L11.2876 7.49998Z"
                ></path>
            </svg>
        ),
        title: 'LIVE Creator Hub',
        to: 'https://www.tiktok.com/live/creators/ja-JP/?enter_from=more&lang=en&region=JP',
    },
    {
        icon: (
            <svg
                className={cx('english-div-svg')}
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
                ></path>
            </svg>
        ),
        title: 'English',
        children: {
            title: 'Language ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    code: 'pi',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'ce',
                    title: '(Česká republika)',
                },
                {
                    type: 'language',
                    code: 'de',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'er',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'su',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'er',
                    title: 'עברית (ישראל)',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'हिंदी',
                },
                {
                    type: 'language',
                    code: 'ma',
                    title: 'Magyar (Magyarország)',
                },
                // {
                //     type: 'language',
                //     code: 'in',
                //     title: 'Bahasa Indonesia (Indonesia)',
                // },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'ba',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: '한국어 (대한민국)',
                },
                {
                    type: 'language',
                    code: 'in',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    type: 'language',
                    code: 'ne',
                    title: 'Nederlands (Nederland)',
                },
                {
                    type: 'language',
                    code: 'po',
                    title: 'Polski (Polska)',
                },
                {
                    type: 'language',
                    code: 'bz',
                    title: 'Português (Brasil)',
                },
                {
                    type: 'language',
                    code: 'rm',
                    title: 'Română (Romania)',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Русский (Россия)',
                },
                {
                    type: 'language',
                    code: 'sv',
                    title: 'Svenska (Sverige)',
                },
                {
                    type: 'language',
                    code: 'th',
                    title: 'ไทย (ไทย)',
                },
                {
                    type: 'language',
                    code: 'tu',
                    title: 'Türkçe (Türkiye)',
                },
                {
                    type: 'language',
                    code: 'rs',
                    title: 'Українська (Україна',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'اردو',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: '简体中文',
                },
                {
                    type: 'language',
                    code: 'tw',
                    title: '繁體中文',
                },
            ],
        },
    },
    {
        icon: (
            <svg
                className={cx('feedback-svg')}
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
                ></path>
            </svg>
        ),
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: (
            <svg
                className={cx('keyboard-svg')}
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
                ></path>
            </svg>
        ),
        title: 'Keyboard shortcuts',
    },
    {
        icon: (
            <svg
                className={cx('darkmode-svg')}
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3019 6.38068C21.723 6.08373 22.9615 7.16986 23.009 8.50693C23.2751 16.0034 29.4377 22 37 22C37.8141 22 38.6105 21.9307 39.3839 21.7982C40.7019 21.5723 42 22.5655 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 15.3248 12.1351 8.0871 20.3019 6.38068ZM19.2223 10.8358C13.8426 12.7885 10 17.9473 10 24C10 31.732 16.268 38 24 38C31.06 38 36.8994 32.7742 37.8611 25.9797C37.5756 25.9932 37.2886 26 37 26C28.0237 26 20.5827 19.4301 19.2223 10.8358Z"
                ></path>
            </svg>
        ),
        btn: (
            <>
                <button
                    type="button"
                    role="switch"
                    aria-checked="false"
                    aria-label="Turn on dark mode"
                    className={cx('darkmode-button')}
                >
                    <div className={cx('darkmode-button-div')}>
                        <span className={cx('darkmode-button-span')}></span>
                    </div>
                </button>
            </>
        ),
        title: 'Dark mode',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: (
                <svg
                    className={cx('view-profile-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
                    ></path>
                </svg>
            ),
            title: 'View profile',
        },
        {
            icon: (
                <svg
                    className={cx('favorites-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 11C9 8.23858 11.2386 6 14 6H34C36.7614 6 39 8.23858 39 11V40C39 40.7439 38.5871 41.4263 37.9282 41.7716C37.2693 42.1168 36.4732 42.0678 35.8616 41.6444L24 33.4325L12.1384 41.6444C11.5268 42.0678 10.7307 42.1168 10.0718 41.7716C9.41286 41.4263 9 40.7439 9 40V11ZM14 10C13.4477 10 13 10.4477 13 11V36.1829L22.8616 29.3556C23.5465 28.8815 24.4535 28.8815 25.1384 29.3556L35 36.1829V11C35 10.4477 34.5523 10 34 10H14Z"
                    ></path>
                </svg>
            ),
            title: 'Favorites',
        },
        {
            icon: (
                <svg
                    className={cx('get-coins-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0002 2.49992C5.85803 2.49992 2.50016 5.85778 2.50016 9.99992C2.50016 14.1421 5.85803 17.4999 10.0002 17.4999C14.1423 17.4999 17.5002 14.1421 17.5002 9.99992C17.5002 5.85778 14.1423 2.49992 10.0002 2.49992ZM0.833496 9.99992C0.833496 4.93731 4.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668 4.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C4.93755 19.1666 0.833496 15.0625 0.833496 9.99992Z"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.141 4.99992C12.141 6.27424 13.2115 7.3484 14.5835 7.3484V9.01507C13.6736 9.01507 12.8267 8.72389 12.141 8.22854V11.4961C12.141 13.2238 10.7059 14.5833 8.98723 14.5833C7.26852 14.5833 5.8335 13.2238 5.8335 11.4961C5.8335 9.76845 7.26852 8.40901 8.98723 8.40901V10.0757C8.1429 10.0757 7.50016 10.7343 7.50016 11.4961C7.50016 12.2579 8.1429 12.9166 8.98723 12.9166C9.83156 12.9166 10.4743 12.2579 10.4743 11.4961V4.99992H12.141Z"
                    ></path>
                </svg>
            ),
            title: 'Get coins',
            to: 'https://www.tiktok.com/coin?enter_from=web_main_nav&lang=en',
        },
        {
            icon: (
                <svg
                    className={cx('live-creator-hub-a-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6667 13.2748C11.6667 12.6798 11.9838 12.13 12.4988 11.8321C13.9977 10.965 15 9.34859 15 7.49998C15 4.73856 12.7614 2.49998 10 2.49998C7.23859 2.49998 5.00001 4.73856 5.00001 7.49998C5.00001 9.34859 6.00237 10.965 7.50122 11.8321C8.01621 12.13 8.33334 12.6798 8.33334 13.2748V14.7916C8.33334 14.9067 8.42662 15 8.54168 15H11.4583C11.5734 15 11.6667 14.9067 11.6667 14.7916V13.2748ZM13.3333 13.2748V15.8333C13.3333 16.2935 12.9602 16.6666 12.5 16.6666H7.50001C7.03977 16.6666 6.66668 16.2935 6.66668 15.8333V13.2748C4.67401 12.1221 3.33334 9.96759 3.33334 7.49998C3.33334 3.81808 6.31811 0.833313 10 0.833313C13.6819 0.833313 16.6667 3.81808 16.6667 7.49998C16.6667 9.96759 15.326 12.1221 13.3333 13.2748Z"
                    ></path>
                    <path d="M7.50001 17.9166C7.50001 17.6865 7.68656 17.5 7.91668 17.5H12.0833C12.3135 17.5 12.5 17.6865 12.5 17.9166V18.75C12.5 18.9801 12.3135 19.1666 12.0833 19.1666H7.91668C7.68656 19.1666 7.50001 18.9801 7.50001 18.75V17.9166Z"></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.46401 4.45524C8.67291 4.3393 8.92711 4.34959 9.12639 4.48207L12.8301 6.94419C13.014 7.06647 13.125 7.27561 13.125 7.49998C13.125 7.72435 13.014 7.93349 12.8301 8.05576L9.12639 10.5179C8.92711 10.6504 8.67291 10.6607 8.46401 10.5447C8.2551 10.4288 8.12501 10.2052 8.12501 9.9621V5.03786C8.12501 4.79477 8.2551 4.57119 8.46401 4.45524ZM11.2876 7.49998L9.42131 8.74062V6.25934L11.2876 7.49998Z"
                    ></path>
                </svg>
            ),
            title: 'LIVE Creator Hub',
            to: 'https://www.tiktok.com/live/creators/ja-JP/?enter_from=more&lang=en&region=JP',
        },
        {
            icon: (
                <svg
                    className={cx('setting')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.375 44.2391C21.375 44.6593 21.7157 45 22.1359 45H25.8641C26.2843 45 26.625 44.6593 26.625 44.2391V41.3044C29.4979 40.8723 32.1421 39.7417 34.3792 38.0912L36.4554 40.1674C36.7525 40.4646 37.2343 40.4646 37.5314 40.1674L40.1677 37.5311C40.4648 37.234 40.4648 36.7522 40.1677 36.4551L38.0915 34.3789C39.7419 32.1418 40.8723 29.4978 41.3044 26.625H44.2391C44.6593 26.625 45 26.2843 45 25.8641V22.1359C45 21.7157 44.6593 21.375 44.2391 21.375H41.3044C40.8723 18.5021 39.7418 15.858 38.0913 13.6209L40.1673 11.5449C40.4644 11.2478 40.4644 10.766 40.1673 10.4689L37.531 7.83262C37.2339 7.53548 36.7521 7.53548 36.455 7.83262L34.379 9.90863C32.1419 8.25818 29.4978 7.1277 26.625 6.69556V3.76087C26.625 3.34065 26.2843 3 25.8641 3H22.1359C21.7156 3 21.375 3.34065 21.375 3.76087V6.69556C18.5022 7.1277 15.8582 8.25815 13.6211 9.90854L11.5452 7.83265C11.2481 7.53551 10.7664 7.53551 10.4692 7.83265L7.83294 10.4689C7.5358 10.7661 7.5358 11.2478 7.83294 11.545L9.90878 13.6208C8.25826 15.8579 7.12772 18.5021 6.69556 21.375H3.76087C3.34065 21.375 3 21.7157 3 22.1359V25.8641C3 26.2843 3.34065 26.625 3.76087 26.625H6.69556C7.1277 29.4978 8.25819 32.1419 9.90863 34.379L7.83255 36.4551C7.53541 36.7522 7.53541 37.234 7.83255 37.5311L10.4688 40.1674C10.766 40.4645 11.2477 40.4645 11.5449 40.1674L13.6209 38.0913C15.858 39.7418 18.5021 40.8723 21.375 41.3044V44.2391ZM24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
                    ></path>
                </svg>
            ),
            title: 'Settings',
            to: 'https://www.tiktok.com/setting?lang=en',
        },
        {
            icon: (
                <svg
                    className={cx('english-div-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
                    ></path>
                </svg>
            ),
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'العربية',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'বাঙ্গালি (ভারত)',
                    },
                    {
                        type: 'language',
                        code: 'pi',
                        title: 'Cebuano (Pilipinas)',
                    },
                    {
                        type: 'language',
                        code: 'ce',
                        title: '(Česká republika)',
                    },
                    {
                        type: 'language',
                        code: 'de',
                        title: 'Deutsch',
                    },
                    {
                        type: 'language',
                        code: 'er',
                        title: 'Ελληνικά (Ελλάδα)',
                    },
                    {
                        type: 'language',
                        code: 'es',
                        title: 'Español',
                    },
                    {
                        type: 'language',
                        code: 'su',
                        title: 'Suomi (Suomi)',
                    },
                    {
                        type: 'language',
                        code: 'fi',
                        title: 'Filipino (Pilipinas)',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'Français',
                    },
                    {
                        type: 'language',
                        code: 'er',
                        title: 'עברית (ישראל)',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'हिंदी',
                    },
                    {
                        type: 'language',
                        code: 'ma',
                        title: 'Magyar (Magyarország)',
                    },
                    // {
                    //     type: 'language',
                    //     code: 'in',
                    //     title: 'Bahasa Indonesia (Indonesia)',
                    // },
                    {
                        type: 'language',
                        code: 'it',
                        title: 'Italiano (Italia)',
                    },
                    {
                        type: 'language',
                        code: 'jp',
                        title: '日本語（日本）',
                    },
                    {
                        type: 'language',
                        code: 'ba',
                        title: 'Basa Jawa (Indonesia)',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'ខ្មែរ (កម្ពុជា)',
                    },
                    {
                        type: 'language',
                        code: 'kr',
                        title: '한국어 (대한민국)',
                    },
                    {
                        type: 'language',
                        code: 'in',
                        title: 'Bahasa Melayu (Malaysia)',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'မြန်မာ (မြန်မာ)',
                    },
                    {
                        type: 'language',
                        code: 'ne',
                        title: 'Nederlands (Nederland)',
                    },
                    {
                        type: 'language',
                        code: 'po',
                        title: 'Polski (Polska)',
                    },
                    {
                        type: 'language',
                        code: 'bz',
                        title: 'Português (Brasil)',
                    },
                    {
                        type: 'language',
                        code: 'rm',
                        title: 'Română (Romania)',
                    },
                    {
                        type: 'language',
                        code: 'ru',
                        title: 'Русский (Россия)',
                    },
                    {
                        type: 'language',
                        code: 'sv',
                        title: 'Svenska (Sverige)',
                    },
                    {
                        type: 'language',
                        code: 'th',
                        title: 'ไทย (ไทย)',
                    },
                    {
                        type: 'language',
                        code: 'tu',
                        title: 'Türkçe (Türkiye)',
                    },
                    {
                        type: 'language',
                        code: 'rs',
                        title: 'Українська (Україна',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'اردو',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt (Việt Nam)',
                    },
                    {
                        type: 'language',
                        code: 'cn',
                        title: '简体中文',
                    },
                    {
                        type: 'language',
                        code: 'tw',
                        title: '繁體中文',
                    },
                ],
            },
        },
        {
            icon: (
                <svg
                    className={cx('feedback-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
                    ></path>
                </svg>
            ),
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: (
                <svg
                    className={cx('keyboard-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
                    ></path>
                </svg>
            ),
            title: 'Keyboard shortcuts',
        },
        {
            icon: (
                <svg
                    className={cx('darkmode-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.3019 6.38068C21.723 6.08373 22.9615 7.16986 23.009 8.50693C23.2751 16.0034 29.4377 22 37 22C37.8141 22 38.6105 21.9307 39.3839 21.7982C40.7019 21.5723 42 22.5655 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 15.3248 12.1351 8.0871 20.3019 6.38068ZM19.2223 10.8358C13.8426 12.7885 10 17.9473 10 24C10 31.732 16.268 38 24 38C31.06 38 36.8994 32.7742 37.8611 25.9797C37.5756 25.9932 37.2886 26 37 26C28.0237 26 20.5827 19.4301 19.2223 10.8358Z"
                    ></path>
                </svg>
            ),
            btn: (
                <>
                    <button
                        type="button"
                        role="switch"
                        aria-checked="false"
                        aria-label="Turn on dark mode"
                        className={cx('darkmode-button')}
                    >
                        <div className={cx('darkmode-button-div')}>
                            <span className={cx('darkmode-button-span')}></span>
                        </div>
                    </button>
                </>
            ),
            title: 'Dark mode',
        },
        {
            icon: (
                <svg
                    className={cx('log-out-svg')}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.1716 26L7 26C6.44771 26 6 25.5523 6 25L6 23C6 22.4477 6.44771 22 7 22L24.1716 22L20.2929 18.1213C19.9024 17.7308 19.9024 17.0976 20.2929 16.7071L21.7071 15.2929C22.0976 14.9024 22.7308 14.9024 23.1213 15.2929L30.4142 22.5858C31.1953 23.3668 31.1953 24.6332 30.4142 25.4142L23.1213 32.7071C22.7308 33.0976 22.0976 33.0976 21.7071 32.7071L20.2929 31.2929C19.9024 30.9024 19.9024 30.2692 20.2929 29.8787L24.1716 26ZM36 43L27 43C26.4477 43 26 42.5523 26 42L26 40C26 39.4477 26.4477 39 27 39L36 39C37.1046 39 38 38.1046 38 37L38 11C38 9.89543 37.1046 9 36 9L27 9C26.4477 9 26 8.55228 26 8L26 6C26 5.44771 26.4477 5 27 5L36 5C39.3137 5 42 7.68629 42 11L42 37C42 40.3137 39.3137 43 36 43Z"
                    ></path>
                </svg>
            ),
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-left')}>
                    <Link className={cx('logo')} to={config.routes.home}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <Search />

                <div className={cx('header-right')}>
                    {currentUser ? (
                        <>
                            <div className={cx('upload')}>
                                <a
                                    className={cx('upload-link')}
                                    href="/upload"
                                    label="Upload a video"
                                >
                                    <div className={cx('upload-text')}>
                                        <svg
                                            className={cx('upload-icon')}
                                            width="1em"
                                            data-e2e=""
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                                            ></path>
                                        </svg>
                                        <span className={cx('text')}>
                                            Upload
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <Tippy content="Messages" placement="bottom">
                                <div className={cx('messages')}>
                                    <a href="/messages">
                                        <span>
                                            <svg
                                                className={cx('messages-icon')}
                                                width="1em"
                                                data-e2e=""
                                                height="1em"
                                                viewBox="0 0 48 48"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <div className={cx('inbox')}>
                                    <span>
                                        <svg
                                            className={cx('inbox-icon')}
                                            width="32"
                                            data-e2e=""
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <div className={cx('upload')}>
                                <a
                                    className={cx('upload-link')}
                                    href="/upload"
                                    label="Upload a video"
                                >
                                    <div className={cx('upload-text')}>
                                        <svg
                                            className={cx('upload-icon')}
                                            width="1em"
                                            data-e2e=""
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                                            ></path>
                                        </svg>
                                        <span className={cx('text')}>
                                            Upload
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/db93d67e698a6fb42c82be5764319ce4.jpeg?x-expires=1698102000&x-signature=T0s335EfhHK0gJkOBem5wUXjCZU%3D"
                                className={cx('user-avatar')}
                                alt="Tuan Nguyen"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/db93d67e698a6fb42c82be5764319ce4.jpeg?x-expires=1698102000&x-signature=T0s335EfhHK0gJkOBem5wUXjCZU%3D"
                            />
                        ) : (
                            <i className={cx('more-menu-icon')}>
                                <svg
                                    className={cx('more-icon')}
                                    width="1em"
                                    data-e2e=""
                                    height="1em"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"
                                    ></path>
                                </svg>
                            </i>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
