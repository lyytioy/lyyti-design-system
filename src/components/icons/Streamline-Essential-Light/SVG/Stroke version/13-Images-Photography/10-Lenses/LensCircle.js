import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lens-circle_svg__a" cx={16} cy={15.5} r={7.5} />,
    <circle className="lens-circle_svg__a" cx={16} cy={15.5} r={5.5} />,
    <path
      className="lens-circle_svg__a"
      d="M10 22.73a7.5 7.5 0 110-14.461M18.5 3h4M20.5 1v4M10 5h3M11.5 3.5v3"
    />
  );

export default SvgLensCircle;
