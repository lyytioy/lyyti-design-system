import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleFour = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-four_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="module-four_svg__a"
      d="M22.5 7.5V18L12 22.5 1.5 18V7.5L12 12l10.5-4.5zM12 22.5V12M7.5 4.929L1.5 7.5M16.5 4.929l6 2.571"
    />,
    <ellipse className="module-four_svg__a" cx={12} cy={3} rx={4.5} ry={1.5} />,
    <path
      className="module-four_svg__a"
      d="M7.5 3v3c0 .828 2.015 1.5 4.5 1.5s4.5-.672 4.5-1.5V3"
    />
  );

export default SvgModuleFour;
