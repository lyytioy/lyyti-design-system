import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="laptop-share_svg__a" cx={13.75} cy={18.25} r={2.25} />,
    <circle className="laptop-share_svg__a" cx={21.25} cy={21.25} r={2.25} />,
    <circle className="laptop-share_svg__a" cx={21.25} cy={13.75} r={2.25} />,
    <path
      className="laptop-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33M20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M9.5 17.5H5.623a5.281 5.281 0 01-5.123-4h11"
    />
  );

export default SvgLaptopShare;
