import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopApprove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-approve_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="laptop-approve_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="laptop-approve_svg__a"
      d="M20.174 15.756l-2.905 3.873a.751.751 0 01-1.131.08l-1.5-1.5M20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M9.5 17.5H5.623a5.281 5.281 0 01-5.123-4h10"
    />
  );

export default SvgLaptopApprove;
