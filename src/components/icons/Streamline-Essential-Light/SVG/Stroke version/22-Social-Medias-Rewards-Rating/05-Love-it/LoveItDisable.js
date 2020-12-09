import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-disable_svg__a"
      d="M8.764 17.85L2.2 11.09a5.669 5.669 0 01-1.089-6.607A5.839 5.839 0 0110.4 3L12 4.455 13.6 3a5.84 5.84 0 019.287 1.487 5.655 5.655 0 01.192 4.7"
    />,
    <circle className="love-it-disable_svg__a" cx={17.5} cy={16.182} r={6} />,
    <path className="love-it-disable_svg__a" d="M13.258 20.424l8.485-8.485" />
  );

export default SvgLoveItDisable;
