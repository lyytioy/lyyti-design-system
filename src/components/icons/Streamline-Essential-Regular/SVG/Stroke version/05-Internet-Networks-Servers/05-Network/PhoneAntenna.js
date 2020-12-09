import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-antenna_svg__a"
      x={15.75}
      y={11.25}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-antenna_svg__a"
      d="M15.75 20.25h7.5M8.614 7.114A4.5 4.5 0 012.25.75zM5.432 3.932l1.5-1.5"
    />,
    <path
      className="phone-antenna_svg__a"
      d="M.75 10.5l1.682-3.214L4.5 10.5M12 3.75h6a1.5 1.5 0 011.5 1.5v3M12.75 20.25h-7.5a1.5 1.5 0 01-1.5-1.5V13.5"
    />
  );

export default SvgPhoneAntenna;
