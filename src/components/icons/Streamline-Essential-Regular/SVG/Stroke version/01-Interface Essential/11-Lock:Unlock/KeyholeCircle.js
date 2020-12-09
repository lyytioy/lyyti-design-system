import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyholeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyhole-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="keyhole-circle_svg__a" cx={12} cy={9.75} r={2.25} />,
    <path className="keyhole-circle_svg__a" d="M12 12v4.5" />,
    <circle className="keyhole-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgKeyholeCircle;
