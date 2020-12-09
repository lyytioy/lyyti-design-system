import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="loading-line_svg__a" cx={13.876} cy={11.997} r={3} />,
    <path
      className="loading-line_svg__a"
      d="M1.5 12a.375.375 0 10.375.375A.375.375 0 001.5 12"
    />,
    <circle className="loading-line_svg__a" cx={6.376} cy={11.997} r={1.5} />,
    <circle className="loading-line_svg__a" cx={21.376} cy={11.997} r={1.5} />
  );

export default SvgLoadingLine;
