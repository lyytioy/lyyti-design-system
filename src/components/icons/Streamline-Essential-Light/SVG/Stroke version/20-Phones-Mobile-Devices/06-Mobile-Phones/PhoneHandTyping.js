import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneHandTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-hand-typing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-hand-typing_svg__a"
      d="M21.5 10v11.5a2 2 0 01-2 2h-9a2 2 0 01-2-2V16M8.5 12V4.5a2 2 0 011.22-1.842M21.5 19.5h-13"
    />,
    <path
      className="phone-hand-typing_svg__a"
      d="M15 21.251a.25.25 0 01.25.25.25.25 0 01-.25.25.249.249 0 01-.25-.25.249.249 0 01.25-.25M8.5 16h3a2 2 0 000-4H6M6.5 18.967A3.2 3.2 0 008.5 16"
    />,
    <path
      className="phone-hand-typing_svg__a"
      d="M8.5 7h-2a6 6 0 00-6 6v5.546c0 1.513.672 2.23 2 2.954v2M15 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M18 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M21 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-hand-typing_svg__a"
      d="M19.75.5h-4.5a3.75 3.75 0 000 7.5h1.25v2l3-2h.25a3.75 3.75 0 000-7.5z"
    />
  );

export default SvgPhoneHandTyping;
