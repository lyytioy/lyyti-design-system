import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.5.125a.75.75 0 00-.75.75v4.75a.25.25 0 01-.25.25h-.75a.25.25 0 00-.25.25v13.25a.749.749 0 01-.186.494l-3.142 3.591a.25.25 0 00.188.415h4.39a1.5 1.5 0 001.5-1.5V.875a.75.75 0 00-.75-.75z" />,
    <path d="M18.938 19.164A.25.25 0 0019 19V6.125a.25.25 0 00-.25-.25h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 00.6 1.2l1.2.9a.5.5 0 01.2.4v5.131a.5.5 0 01-.12.325l-2.519 2.938a1.545 1.545 0 00-.361 1.106 1.5 1.5 0 001.437 1.5.265.265 0 00.212-.091zM10.336 5.047a1 1 0 00-1.414 0 4 4 0 000 5.656 1 1 0 001.414-1.414 2 2 0 010-2.828 1 1 0 000-1.414z" />,
    <path d="M7.714 4.339A1 1 0 006.3 2.925a7.009 7.009 0 000 9.9 1 1 0 001.414-1.414 5.008 5.008 0 010-7.072z" />,
    <path d="M2.75 7.875a7.948 7.948 0 012.343-5.657A1 1 0 003.679.8a10 10 0 000 14.142 1 1 0 101.414-1.414A7.948 7.948 0 012.75 7.875z" />
  );

export default SvgPhoneRing;