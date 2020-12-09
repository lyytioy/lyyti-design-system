import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontal3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal-3_svg__a"
      d="M11.5 7.999v9M23.5 12.499h-9M20.5 15.499l3-3-3-3M.5 12.499h8M3.5 15.499l-3-3 3-3"
    />
  );

export default SvgExpandHorizontal3;
