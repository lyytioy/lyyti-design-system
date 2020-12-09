import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollVertical1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-vertical-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="scroll-vertical-1_svg__a"
      cx={12.09}
      cy={11.998}
      r={3}
    />,
    <path
      className="scroll-vertical-1_svg__a"
      d="M12.718 1.024a.854.854 0 00-1.257 0L8.6 4.142a.66.66 0 00.49 1.106h6a.66.66 0 00.486-1.106zM11.461 22.971a.852.852 0 001.257 0l2.858-3.118a.659.659 0 00-.486-1.105h-6a.66.66 0 00-.49 1.105z"
    />
  );

export default SvgScrollVertical1;
