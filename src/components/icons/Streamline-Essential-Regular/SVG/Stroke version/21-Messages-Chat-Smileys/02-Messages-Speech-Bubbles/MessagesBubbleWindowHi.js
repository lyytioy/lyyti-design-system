import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleWindowHi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-window-hi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-window-hi_svg__a"
      d="M20.233 1.157a5.234 5.234 0 00-5.967 8.283l-.656 3.779 3.423-2.111a5.133 5.133 0 003.33-.321"
    />,
    <circle
      className="messages-bubble-window-hi_svg__a"
      cx={8.436}
      cy={15.375}
      r={3.375}
    />,
    <path
      className="messages-bubble-window-hi_svg__a"
      d="M13.663 23.243A6.062 6.062 0 003.2 23.25M18.204 14.25v9M.954 23.25V3.75a3 3 0 013-3h7.5M.954 6.75h9M6.954 3.75h3M22.7 3a.375.375 0 10.375.375A.375.375 0 0022.7 3M16.704 3.75v4.5M22.704 6v2.25M16.704 6h3M19.704 3.75v4.5"
    />
  );

export default SvgMessagesBubbleWindowHi;
