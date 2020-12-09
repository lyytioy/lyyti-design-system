import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-focus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="composition-focus_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-focus_svg__a"
      d="M12 4.841V.75M19.159 12h4.091M12 19.159v4.091M4.841 12H.75"
    />,
    <circle className="composition-focus_svg__a" cx={12} cy={12} r={7.159} />
  );

export default SvgCompositionFocus;
