import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".delete-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="delete-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="delete-1_svg__a"
      d="M3.868 3.869l16.264 16.263M20.132 3.869L3.868 20.131"
    />
  );

export default SvgDelete1;
