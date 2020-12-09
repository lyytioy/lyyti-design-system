import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsDoubleTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-double-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods-double-tap-1_svg__a"
      d="M9 10.745V9M6 5.625A.375.375 0 106.375 6 .375.375 0 006 5.625"
    />,
    <path
      className="earpods-double-tap-1_svg__a"
      d="M12 13.5v9a.75.75 0 01-.75.75h-1.5A.75.75 0 019 22.5V10.745a5.255 5.255 0 01-6-1.071V2.326a5.254 5.254 0 016-1.069"
    />,
    <circle
      className="earpods-double-tap-1_svg__a"
      cx={15.75}
      cy={6.001}
      r={5.25}
    />,
    <circle
      className="earpods-double-tap-1_svg__a"
      cx={15.75}
      cy={6.001}
      r={2.25}
    />
  );

export default SvgEarpodsDoubleTap1;
