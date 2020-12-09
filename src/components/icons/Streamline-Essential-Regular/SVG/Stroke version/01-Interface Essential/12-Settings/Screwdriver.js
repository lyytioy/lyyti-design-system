import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrewdriver = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screwdriver_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="screwdriver_svg__a"
      d="M12.233 13.887l-2.121-2.121a1.5 1.5 0 00-2.122 0L1.627 18.13a3 3 0 004.242 4.242l6.364-6.364a1.5 1.5 0 000-2.121zM19.029 1.455a1.58 1.58 0 012.432-.241l1.324 1.324a1.58 1.58 0 01-.241 2.432l-2.472 1.649a1.941 1.941 0 01-2.692-2.692zM17.623 6.376l-6.451 6.451"
    />
  );

export default SvgScrewdriver;
