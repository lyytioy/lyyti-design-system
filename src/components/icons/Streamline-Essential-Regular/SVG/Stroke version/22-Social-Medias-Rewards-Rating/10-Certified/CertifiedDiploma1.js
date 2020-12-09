import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedDiploma1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-diploma-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="certified-diploma-1_svg__a"
      d="M11.25 17.25H.75V.75h22.5v4.5M.75 9.75l7.5 7.5M15.75.75l4.5 4.5M16.237 16.483l-.8 5.879a.751.751 0 001.269.666l2.049-2.05 2.049 2.05a.751.751 0 001.269-.666l-.8-5.879"
    />,
    <circle
      className="certified-diploma-1_svg__a"
      cx={18.75}
      cy={12.75}
      r={4.5}
    />,
    <path
      className="certified-diploma-1_svg__a"
      d="M.75 8.25l7.5-7.5M18.75 12.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCertifiedDiploma1;
