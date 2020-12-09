import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-shield_svg__a"
      d="M12 9.004v3M10.5 10.504h3M12.357 14.435l.369-.14A4.878 4.878 0 0016 10.069V7.808a.7.7 0 00-.419-.639 10.529 10.529 0 00-3.595-.669 10.334 10.334 0 00-3.567.665.7.7 0 00-.419.643v2.261a4.848 4.848 0 003.245 4.231l.369.14a1.035 1.035 0 00.743-.005zM21.306 20.5H2.694a2 2 0 01-1.973-1.667L.5 17.5h23l-.221 1.329a2 2 0 01-1.973 1.671z"
    />,
    <path
      className="laptop-shield_svg__a"
      d="M2.5 3.5h19a1 1 0 011 1v13h-21v-13a1 1 0 011-1z"
    />
  );

export default SvgLaptopShield;
