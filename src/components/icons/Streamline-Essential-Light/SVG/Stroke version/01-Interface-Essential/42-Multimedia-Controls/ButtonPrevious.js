import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="button-previous_svg__a"
      x={7.5}
      y={7.499}
      width={2}
      height={8.997}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="button-previous_svg__a"
      d="M16.5 8.621a.5.5 0 00-.834-.371l-3.753 3.376a.5.5 0 000 .743l3.753 3.376a.5.5 0 00.834-.372z"
    />,
    <circle className="button-previous_svg__a" cx={12} cy={11.999} r={11.5} />
  );

export default SvgButtonPrevious;
