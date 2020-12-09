import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sd-card_svg__a"
      d="M19.5 23.25h-15a1.5 1.5 0 01-1.5-1.5v-10.5h1.5v-3H3v-6A1.5 1.5 0 014.5.75h10.56a1.5 1.5 0 011.139.524l4.44 4.305a1.5 1.5 0 01.361.976v15.2a1.5 1.5 0 01-1.5 1.495zM9 3.75v3M13.5 3.75v3"
    />,
    <path className="sd-card_svg__a" d="M9.75 19.5L12 17.25l2.25 2.25" />
  );

export default SvgSdCard;
