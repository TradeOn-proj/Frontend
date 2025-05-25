import {container, logoStyle, contentStyle, infoStyle, labelStyle, linkStyle, copyrightStyle} from "./Footer.style";
import {Logo2} from "@assets/index"


const Footer=() => {
    return(
     <div css={container}>
        <Logo2 css={logoStyle} />
        <div css={contentStyle}>
        <div css={infoStyle}>
            <span css={labelStyle}>TEAM BOOKING</span>
            <span css={labelStyle}>메일 | stacycho@0728@naver.com</span>
        <div css={linkStyle}>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>문의하기</span>
        </div>
        <div css={copyrightStyle}>
            © 2025 booking. All rights reserved.
        </div>
        </div>
        </div>
     </div>

    );
};
export default Footer;