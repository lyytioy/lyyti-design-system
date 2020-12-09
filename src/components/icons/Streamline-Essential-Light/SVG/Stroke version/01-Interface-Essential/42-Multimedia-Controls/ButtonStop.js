import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonStop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-stop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="button-stop_svg__a"
      x={7.5}
      y={7.499}
      width={9}
      height={9}
      rx={1}
      ry={1}
    />,
    <circle className="button-stop_svg__a" cx={12} cy={11.999} r={11.5} />
  );

export default SvgButtonStop;
