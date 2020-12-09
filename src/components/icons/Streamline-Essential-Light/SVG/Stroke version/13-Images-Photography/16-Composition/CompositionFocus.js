import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-focus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-focus_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-focus_svg__a"
      d="M12 5V1M19 12h4M12 19v4M5 12H1"
    />,
    <circle className="composition-focus_svg__a" cx={12} cy={12} r={7} />
  );

export default SvgCompositionFocus;
