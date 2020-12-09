import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakers1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="speakers-1_svg__a"
      x={4}
      y={0.5}
      width={16}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="speakers-1_svg__a" cx={12} cy={16} r={5} />,
    <circle className="speakers-1_svg__a" cx={12} cy={6} r={2.5} />,
    <circle className="speakers-1_svg__a" cx={12} cy={16} r={1.5} />,
    <path
      className="speakers-1_svg__a"
      d="M12 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSpeakers1;
