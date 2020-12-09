import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderBisexual = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-bisexual_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gender-bisexual_svg__cls-1"
      d="M12.75 23.25H15l.75-4.5h3L16.5 12c-.75-2.25-1.679-3.75-3.75-3.75M12.75.75a3 3 0 010 6M9.75 6.75a3 3 0 010-6M9.75 8.25a4.5 4.5 0 00-4.5 4.5v3h1.5l.75 7.5h2.25M3.75.75h-1.5a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h1.5M20.25.75h1.5a1.5 1.5 0 011.5 1.5v19.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgGenderBisexual;
