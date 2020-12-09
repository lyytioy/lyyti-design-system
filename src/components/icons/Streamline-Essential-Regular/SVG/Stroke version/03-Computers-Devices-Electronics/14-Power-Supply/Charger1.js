import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCharger1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charger-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charger-1_svg__a"
      d="M12 17.25a6 6 0 01-6-6v-4.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v4.5a6 6 0 01-6 6z"
    />,
    <path
      className="charger-1_svg__a"
      d="M9 16.447v2.3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-2.3M9 5.25V.75M15 5.25V.75M12 20.25v3"
    />
  );

export default SvgCharger1;
