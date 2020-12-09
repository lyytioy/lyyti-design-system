import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollVertical1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-vertical-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="scroll-vertical-1_svg__a" cx={12} cy={11.998} r={2} />,
    <path
      className="scroll-vertical-1_svg__a"
      d="M16.5 6.5a.5.5 0 00.369-.838l-4.5-5a.5.5 0 00-.738 0l-4.5 5A.5.5 0 007.5 6.5zM16.5 17.5a.5.5 0 01.369.838l-4.5 5a.5.5 0 01-.738 0l-4.5-5A.5.5 0 017.5 17.5z"
    />
  );

export default SvgScrollVertical1;
