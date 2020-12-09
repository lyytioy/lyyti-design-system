import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-hand_svg__a"
      d="M.751 14.25v9M.751 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.751M6.001 18.75h3M9 3.375a.375.375 0 10.375.375A.375.375 0 009 3.375M14.251 3.75h4.5M9 9.375a.375.375 0 10.375.375A.375.375 0 009 9.375M14.251 9.75h4.5"
    />,
    <path
      className="server-hand_svg__a"
      d="M23.251 3.75a3 3 0 01-3 3h-12a3 3 0 010-6h12a3 3 0 013 3zM23.251 9.75a3 3 0 01-3 3h-12a3 3 0 010-6h12a3 3 0 013 3z"
    />
  );

export default SvgServerHand;
