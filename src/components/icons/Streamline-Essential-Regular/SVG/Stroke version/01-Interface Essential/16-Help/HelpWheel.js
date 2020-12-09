import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHelpWheel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".help-wheel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="help-wheel_svg__a" cx={12} cy={12} r={3.75} />,
    <path
      className="help-wheel_svg__a"
      d="M17.119 20.301l-4.59-4.59M15.711 12.53l4.59 4.589M3.699 17.119l4.59-4.59M11.471 15.712l-4.59 4.589M6.881 3.7l4.59 4.589M8.289 11.471l-4.59-4.59M20.301 6.881l-4.59 4.59M12.529 8.289l4.59-4.589"
    />,
    <circle className="help-wheel_svg__a" cx={12} cy={12} r={9.75} />
  );

export default SvgHelpWheel;
