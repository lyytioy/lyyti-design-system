import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneScroll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-scroll_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-scroll_svg__a"
      d="M14.5 4h1.37a1.993 1.993 0 011.146.362L21.5 7.5h2M23.5 17.5h-5a4.3 4.3 0 01-4-4h-3a2 2 0 010-4H17M14.5 19.5H.5M7.5 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M7.5 21.25"
    />,
    <path
      className="phone-scroll_svg__a"
      d="M14.5 17.971V21.5a2 2 0 01-2 2h-10a2 2 0 01-2-2v-19a2 2 0 012-2h10a2 2 0 012 2v7M7.5 3.5V8"
    />,
    <path
      className="phone-scroll_svg__a"
      d="M6 5.5l1.5-2 1.5 2M7.5 16.5V12M9 14.5l-1.5 2-1.5-2"
    />
  );

export default SvgPhoneScroll;
