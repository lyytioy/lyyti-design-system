import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyholeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyhole-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="keyhole-circle_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="keyhole-circle_svg__a"
      d="M15.5 9a3.5 3.5 0 10-5.024 3.148L9.5 18.5h5l-.978-6.352A3.5 3.5 0 0015.5 9z"
    />
  );

export default SvgKeyholeCircle;
