import { Link } from 'react-router-dom';
import home from './Home.module.css';

const Home = () => {
    return (
        <body>
            <div className={home.wrap}>
                <div className={home.content_box}>
                    <section className={home.main_slide_wrap}>
                        <div id="main_slide" className={home.slide_carousel}>
                            <div className={home.slide_outer}>
                                <div className={home.slide}>
                                    <div className={home.slide_item} style={{ width: "1220px;" }}>
                                        <Link to="/" className={home.item}>
                                            <img src="https://imgcdn.pji.co.kr/pc/img/event/230128_main_PapaTalk.jpg" style={{ width: "1323px;" }} alt="1번" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={home.main_address_wrap}>
                        <img src="https://imgcdn.pji.co.kr/pc/img/icon_marker.png" alt="pc주소아이콘" className={home.icon} />
                        <span id="setAddress">기본 주소를 등록해주세요.</span>
                    </section>
                    <section className={home.main_order_wrap}>
                        <button className={home.btn_order} onclick="">
                            <img src="https://imgcdn.pji.co.kr/pc/img/btn_delivery.png" alt="메인배달주문" />
                        </button>
                        <button className={home.btn_order} onclick="">
                            <img src="https://imgcdn.pji.co.kr/pc/img/btn_wrapping.png" alt=" 메인포장주문" />
                        </button>
                    </section>
                </div>
            </div>

            <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                <div style={{ display: 'inline-block', paddingLeft: '30px', paddingRight: '30px' }}>
                    <img src="https://imgcdn.pji.co.kr/pc/img/icon_link3.png" alt="link3"></img>
                    <h1>이벤트</h1>
                </div>

                <div style={{ display: 'inline-block', paddingLeft: '30px', paddingRight: '30px' }}>
                    <img src="https://imgcdn.pji.co.kr/pc/img/icon_link5.png" alt="link5"></img>
                    <h1>E-Coupon 주문</h1>
                </div>

                <div style={{ display: 'inline-block', paddingLeft: '30px', paddingRight: '30px' }}>
                    <img src="https://imgcdn.pji.co.kr/pc/img/icon_link2.png" alt=""></img>
                    <h1>제휴 할인</h1>
                </div>

                <div style={{ display: 'inline-block', paddingLeft: '30px', paddingRight: '30px' }}>
                    <img src="https://imgcdn.pji.co.kr/pc/img/icon_link4.png" alt=""></img>
                    <h1>매장 찾기</h1>
                </div>
            </div>
            <section style={{ textAlign: 'center' }}>
                <img style={{ margin: '0 auto', width: '1200px', height: '40%', marginTop: '30px', textAlign: 'center' }} src="https://imgcdn.pji.co.kr/pc/img/event/230128_franchisee_low.jpg" alt=""></img>
            </section>

            <div style={{ textAlign: 'center', margin: '0 auto', marginTop: '50px', marginBottom: '60px'}}>
                <div style={{ float: 'left' }}>
                    <div>
                        <img src="https://imgcdn.pji.co.kr/pc/img/220301_icon_logo_color.png" alt=""></img>
                    </div>
                    <div>
                        <img src="https://imgcdn.pji.co.kr/pc/img/icon_facebook_color.png" alt=""></img>
                        <img src="https://imgcdn.pji.co.kr/pc/img/icon_twitter_color.png" alt=""></img>
                        <img src="https://imgcdn.pji.co.kr/pc/img/icon_blog_color.png" alt=""></img>
                        <img src='https://imgcdn.pji.co.kr/pc/img/icon_instagram_color.png' alt=""></img>
                        <img src='https://imgcdn.pji.co.kr/pc/img/icon_ch_color.png' alt=""></img>
                    </div>
                </div>

                <div style={{ float: 'right', marginLeft: '30px' }}>
                    <span style={{ marginRight: '20px' }}>고객 센터</span>
                    <span style={{ marginRight: '20px' }}>회사 소개</span>
                    <span style={{ marginRight: '20px' }}>가맹점 모집</span>
                    <span style={{ marginRight: '20px' }}>개인정보처리방침</span>
                    <span style={{ marginRight: '20px' }}>위치기반 서비스</span>
                    <span style={{ marginRight: '20px' }}>이용 약관</span>
                    <span style={{ marginRight: '20px' }}>채용 안내</span>
                <div style={{marginTop: '30px'}}>
                    한국파파존스㈜
                    서울시 강남구 압구정로 210 융기빌딩 4층 우)06022 <br/>
                    Tel:1577-8080Fax:02-515-8448 <br/>
                    대표이사: 서창우개인정보관리 책임자: 전용관 <br/>
                    통신판매신고:강남11495호사업자등록번호:211-87-25621
                </div>
                </div>


            </div>







        </body >
    )
}

export default Home;