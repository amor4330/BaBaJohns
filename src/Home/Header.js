import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom";
import home from './Home.module.css';
const Header = () => {

    return (
        <Fragment>
            <header className={home.fixed_header}>
                <div className={home.header_wrap}>
                    <div className={home.hl_wrap}>
                        <ul className={home.hl_list}>
                            <li><Link to="/menu" className={home.link}>메뉴</Link></li>
                            <li><a href="#" className={home.link}>이벤트/할인</a></li>
                            <li><a href="#" className={home.link}>E-쿠폰주문</a></li>
                        </ul>
                    </div>
                    <Link to="/" className={home.logo}>
                        <img src="https://imgcdn.pji.co.kr/pc/img/220301_icon_logo.png" alt="메인로고" className={home.main_img} />
                    </Link>
                    <div className={home.hr_list}>
                        <a href="#" className={home.btn_join}>회원가입</a>
                        <a style={{ cursor: "pointer" }} className={home.btn_login}>로그인</a>
                        <div className={home.cart_wrap}>
                            <a style={{ cursor: "pointer" }}>
                                <img src="https://imgcdn.pji.co.kr/pc/img/icon_cart.png" alt="장바구니아이콘" />
                            </a>
                        </div>
                        <button className={home.btn_all_menu}>
                            <a style={{ cursor: "pointer" }}>
                                <img src="https://imgcdn.pji.co.kr/pc/img/icon_lnb_menu.png" className={home.off} alt="전체메뉴아이콘" />
                            </a>
                        </button>
                    </div>
                </div>
            </header>
            <section>
                <Outlet />
            </section>
        </Fragment>
    )


}

export default Header;