import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingLine1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-line-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="loading-line-1_svg__a" cx={4.5} cy={11.997} r={3.75} />,
    <circle className="loading-line-1_svg__a" cx={14.25} cy={11.997} r={3} />,
    <circle className="loading-line-1_svg__a" cx={21.75} cy={11.997} r={1.5} />
  );

export default SvgLoadingLine1;
