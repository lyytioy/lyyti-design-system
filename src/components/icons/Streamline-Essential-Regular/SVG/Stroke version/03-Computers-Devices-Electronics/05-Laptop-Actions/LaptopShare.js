import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="laptop-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="laptop-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="laptop-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="laptop-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6M14.25 12H.75a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopShare;
