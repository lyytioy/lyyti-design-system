import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPause1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-pause-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="button-pause-1_svg__a" cx={12} cy={11.999} r={11.5} />,
    <rect
      className="button-pause-1_svg__a"
      x={7.5}
      y={7.499}
      width={3}
      height={9}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="button-pause-1_svg__a"
      x={13.5}
      y={7.499}
      width={3}
      height={9}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgButtonPause1;
