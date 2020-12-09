import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrewdriver = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screwdriver_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="screwdriver_svg__a"
      d="M10.914 13.086l7.025-7.025M9.824 11.995l2.181 2.181a1.443 1.443 0 010 2.041L5.57 22.652a2.886 2.886 0 01-4.081 0l-.141-.142a2.886 2.886 0 010-4.081l6.434-6.435a1.443 1.443 0 012.042 0zM20.087 6.313a1.53 1.53 0 01-2.021-.125l-.254-.254a1.53 1.53 0 01-.126-2.021L20.111.8a.765.765 0 011.145-.076l2.02 2.02a.765.765 0 01-.076 1.144zM8.069 14.389l-4.95 4.95M9.483 15.803l-4.949 4.95"
    />
  );

export default SvgScrewdriver;
