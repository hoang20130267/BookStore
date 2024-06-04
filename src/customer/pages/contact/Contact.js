import React, {useEffect, useState} from "react";
import axios from "axios";

export const Map = () => {
    return (
        <p>
            <iframe
                src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=Đại học nông Lâm&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                height="500" style={{ border: "0", width: "100%"}} allowFullScreen></iframe>
        </p>
    )
}
export const InforContact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [popupInfo, setPopupInfo] = useState({message: '', type: '', visible: false});
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const sendContact = async (e) => {
        e.preventDefault()
        if(user){
            if(user.email === email) {
                try {
                    console.log(fullName)
                    await axios.post(`http://localhost:8080/api/contact/send`, {
                            fullName: fullName,
                            email: email,
                            title: title,
                            content: content
                        }
                        , {
                            headers: {
                                Authorization: `Bearer ${user.token}`,
                                'Content-Type': 'application/json'
                            }
                        });
                    const successMessage = 'Liên hệ đã được gửi thành công!';
                    setPopupInfo({message: successMessage, type: 'success', visible: true});
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.log(user.email)
                const errorMessage = 'Email không trùng khớp với email đang đăng nhập!';
                setPopupInfo({message: errorMessage, type: 'error', visible: true});
            }
        } else {
            const errorMessage = 'Bạn cần đăng nhập trước khi gửi liên hệ!';
            setPopupInfo({message: errorMessage, type: 'error', visible: true});
        }
    }
    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({...prevInfo, visible: false}));
    };

    useEffect(() => {
        const buttons = Array.from(document.querySelectorAll('button.add_cart_btn'));
        buttons.forEach(button => button.addEventListener('click', sendContact));
        return () => {
            buttons.forEach(button => button.removeEventListener('click', sendContact));
        };
    }, []);

    return (

        <div className="wp-block-bwgb-group bwgb-group space-bottom-1 space-bottom-lg-2 pb-4" id="bwgb-2c85ff9">
            <div className="bwgb-group__inner container">
                <div className="wp-block-bwgb-columns bwgb-columns bwgb-b2ceb89" id="bwgb-b2ceb89">
                    <div className="container">
                        <div className="wp-block-bwgb-columns__row row">
                            <div
                                className="wp-block-bwgb-column bwgb-column col-lg-8 mx-auto bg-white mt-n10 mt-md-n13 pt-5 pt-lg-7 px-3 px-md-5 pl-xl-10 pr-xl-3 bwgb-e657dce col-sm-12 col-md-12 col-lg-12 col-xl-8"
                                id="bwgb-e657dce">
                                <div className="wp-block-bwgb-group bwgb-group ml-xl-4" id="bwgb-ebf02f6">
                                    <div className="wp-block-bwgb-group bwgb-group mb-4 mb-lg-7" id="bwgb-9c49078">
                                        <h2 className="font-weight medium font-size-10 mb-4 mb-lg-7 wp-block-heading">
                                            Thông tin liên hệ
                                        </h2>
                                        <p><em>
                                            Chúng tôi sẽ trả lời bất kỳ câu hỏi nào của bạn về dịch vụ bán hàng, quyền lợi hoặc quan hệ đối tác trực tuyến với chúng tôi.
                                        </em></p>
                                    </div>
                                    <div className="wp-block-bwgb-columns bwgb-columns mb-4 mb-lg-8 bwgb-585c75a"
                                         id="bwgb-585c75a">
                                        <div className="wp-block-bwgb-columns__row row">
                                            <div
                                                className="wp-block-bwgb-column bwgb-column bwgb-39990b4 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                                                id="bwgb-39990b4">
                                                <h2 className="font-weight-medium font-size-4 mb-4 wp-block-heading">
                                                    Địa chỉ liên hệ
                                                </h2>
                                                <p className="font-size-2 mb-5">
                                                    Đại học Nông Lâm, Linh Trung, Tp. Thủ Đức
                                                    <br/>
                                                    Tp. Hồ Chí Minh
                                                </p>
                                                <div>
                                                    <a href="mailto:goldleaf.cdw@gmail.com"
                                                       className="font-size-2 d-block link-black-100 mb-1">goldleaf.cdw@gmail.com</a>
                                                    <a href="tel:+84123-456-7890"
                                                       className="font-size-2 d-block link-black-100">
                                                        +84
                                                        123-456-7890</a>
                                                </div>
                                            </div>
                                            <div
                                                className="wp-block-bwgb-column bwgb-column bwgb-9acb3d4 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                                                id="bwgb-9acb3d4">
                                                <h2 className="font-weight-medium font-size-4 mb-4 wp-block-heading">Văn phòng làm việc</h2>
                                                <p className="font-size-2 mb-5">1418 River Drive, Suite 35 Cottonhall,
                                                    CA 9622<br/>United States</p>
                                                <div>
                                                    <a href="mailto:goldleaf.cdw@gmail.com"
                                                       className="font-size-2 d-block link-black-100 mb-1">goldleaf.cdw@gmail.com</a>
                                                    <a href="tel:+84123-456-7890"
                                                       className="font-size-2 d-block link-black-100">
                                                        +84
                                                        123-456-7890</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wp-block-bwgb-group bwgb-group mb-5 mb-xl-9 pb-xl-1"
                                         id="bwgb-a71c3e4">
                                        <h2 className="font-size-4 font-weight-medium wp-block-heading">Mạng xã hội</h2>
                                        <ul className="wp-block-bwgb-social-icon bwgb-social-icon list-unstyled mb-0 d-flex">
                                            <li className="btn pl-0"><a className="icon link-black-100"><i
                                                className="fab fa-instagram"></i></a></li>
                                            <li className="btn"><a className="icon link-black-100"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                            <li className="btn"><a className="icon link-black-100"><i
                                                className="fab fa-youtube"></i></a></li>
                                            <li className="btn"><a className="icon link-black-100"><i
                                                className="fab fa-twitter"></i></a></li>
                                            <li className="btn"><a className="icon link-black-100"><i
                                                className="fab fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                    <h2 className="font-weight-medium font-size-10 mb-3 pb-xl-1 wp-block-heading">Liên hệ</h2>
                                    <div className="wpforms-container wpforms-container-full contact-form"
                                         id="wpforms-1147">
                                        <form id="wpforms-form-1147" className="wpforms-validate wpforms-form" onSubmit={sendContact}
                                              data-formid="1147" method="post" encType="multipart/form-data"
                                              data-token="cb6fdacae01f59aefc86822b6e621d02">
                                            <div className="wpforms-field-container">
                                                <div id="wpforms-1147-field_1-container"
                                                     className="wpforms-field wpforms-field-name col-sm-6 mb-5 pr-md-3"
                                                     data-field-id="1"><label className="wpforms-field-label"
                                                                              htmlFor="wpforms-1147-field_1">Họ và tên <span
                                                    className="wpforms-required-label">*</span></label>
                                                    <input
                                                    type="text" id="wpforms-1147-field_1"
                                                    className="wpforms-field-large wpforms-field-required"
                                                    name="wpforms[fields][1]" required onChange={e => setFullName(e.target.value)}/>
                                                </div>
                                                <div id="wpforms-1147-field_2-container"
                                                     className="wpforms-field wpforms-field-email col-sm-6 mb-5 pl-md-3"
                                                     data-field-id="2"><label className="wpforms-field-label"
                                                                              htmlFor="wpforms-1147-field_2">Email <span
                                                    className="wpforms-required-label">*</span></label>
                                                    <input
                                                    type="email" id="wpforms-1147-field_2"
                                                    className="wpforms-field-large wpforms-field-required"
                                                    name="wpforms[fields][2]" spellCheck="false" required onChange={e => setEmail(e.target.value)}/></div>
                                                <div id="wpforms-1147-field_3-container"
                                                     className="wpforms-field wpforms-field-text col-sm-12 mb-5"
                                                     data-field-id="3"><label className="wpforms-field-label"
                                                                              htmlFor="wpforms-1147-field_3">Chủ đề</label>
                                                    <input
                                                    type="text" id="wpforms-1147-field_3"
                                                    className="wpforms-field-large" name="wpforms[fields][3]" onChange={e => setTitle(e.target.value)}/>
                                                </div>
                                                <div id="wpforms-1147-field_4-container"
                                                     className="wpforms-field wpforms-field-textarea col-sm-12 mb-5"
                                                     data-field-id="4"><label className="wpforms-field-label"
                                                                              htmlFor="wpforms-1147-field_4">Nội dung liên hệ.</label><textarea
                                                    id="wpforms-1147-field_4" className="wpforms-field-medium"
                                                    name="wpforms[fields][4]"
                                                    placeholder="Bạn thích hoặc không thích điều gì? Điều gì mà cửa hàng cần cải thiện?" onChange={e => setContent(e.target.value)}
                                                />
                                                </div>
                                            </div>
                                            <div className="wpforms-submit-container">
                                                <button type="submit" name="wpforms[submit]"
                                                        id="wpforms-submit-1147"
                                                        className="wpforms-submit m-0 btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60"
                                                        data-alt-text="Sending..." data-submit-text="Submit Message"
                                                        aria-live="assertive"
                                                        value="wpforms-submit"
                                                >Gửi thông tin
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`popup popup--icon -success js_success-popup ${popupInfo.visible && popupInfo.type === 'success' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thành công
                    </h3>
                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--success" data-for="js_success-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>

            <div
                className={`popup popup--icon -error js_error-popup ${popupInfo.visible && popupInfo.type === 'error' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thất bại
                    </h3>
                    <p style={{marginBottom: "10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--error" data-for="js_error-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export const Contact = () => {
    return (
        <main id="main" className="site-main" role="main">
            <div id="post-207" className=" article__page post-207 page type-page status-publish hentry">
                <div className="page__header py-3 py-lg-7 ">
                    <h6 className="font-weight-medium font-size-7 text-center my-1">Liên hệ với chúng tôi</h6>
                </div>
                <div className="article__content article__content--page">
                    <div className="page__content">
                        <Map/>
                        <InforContact/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Contact;