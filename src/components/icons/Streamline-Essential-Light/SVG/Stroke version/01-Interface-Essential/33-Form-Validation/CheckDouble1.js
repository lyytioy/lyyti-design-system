import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckDouble1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-double-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="check-double-1_svg__a"
      d="M23.5 3.999l-12.491 17.5-4.993-4.994M8.973 16.634l9.018-12.635M.507 16.504L5.5 21.499l1.117-1.564"
    />
  );

export default SvgCheckDouble1;
