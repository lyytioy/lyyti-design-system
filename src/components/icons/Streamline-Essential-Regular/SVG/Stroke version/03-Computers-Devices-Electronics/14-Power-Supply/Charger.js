import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCharger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charger_svg__a"
      d="M9 15.75a6 6 0 01-6-6v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v3a6 6 0 01-6 6zM6 5.25V.75M12 5.25V.75M9 15.75v3a3 3 0 003 3 3 3 0 003-3 3 3 0 013-3 3 3 0 013 3v4.5M7.5 8.25h3"
    />
  );

export default SvgCharger;
