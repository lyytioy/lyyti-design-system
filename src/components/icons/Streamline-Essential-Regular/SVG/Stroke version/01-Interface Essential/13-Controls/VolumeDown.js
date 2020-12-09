import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="volume-down_svg__a" cx={12.012} cy={3.75} r={3} />,
    <path
      className="volume-down_svg__a"
      d="M12.012 3.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M16.774 7.075a6.954 6.954 0 11-9.75.224M21.045 6a10.988 10.988 0 11-18.207.208"
    />,
    <path className="volume-down_svg__a" d="M20.524 8.25V6h2.25" />
  );

export default SvgVolumeDown;
