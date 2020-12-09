import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakers1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="speakers-1_svg__a"
      x={3.75}
      y={0.75}
      width={16.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="speakers-1_svg__a" cx={12} cy={15} r={1.5} />,
    <circle className="speakers-1_svg__a" cx={12} cy={5.25} r={1.5} />,
    <circle className="speakers-1_svg__a" cx={12} cy={15} r={5.25} />
  );

export default SvgSpeakers1;
