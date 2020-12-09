import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="read-email-hand_svg__a"
      d="M14.923 17.182A1.5 1.5 0 0114 17.5H2A1.5 1.5 0 01.5 16V6.5M15.5 6.5v6.765"
    />,
    <path
      className="read-email-hand_svg__a"
      d="M3.5 15l2-2.5H9M15.5 6.5l-5 4M.5 6.5l5 4M23.5 23.478l-3-4.393v-5.722c0-2.126-3.46-3.9-5-5.08M17.5 14.859l-3.727-2.987a1.331 1.331 0 00-1.883 1.883l3.61 4.079v2.555c0 1.206 1.724 3.111 1.724 3.111M2.5 8.1V1A.5.5 0 013 .5h10a.5.5 0 01.5.5v7.1M4.5 3.5H7M4.5 5.5h7"
    />
  );

export default SvgReadEmailHand;
