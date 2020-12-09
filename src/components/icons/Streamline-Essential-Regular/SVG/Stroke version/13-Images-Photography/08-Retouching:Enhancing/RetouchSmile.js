import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="retouch-smile_svg__a"
      d="M22.562 15.844a10.2 10.2 0 01-1.031 2.112M18.291 21.327a12.434 12.434 0 01-2.078 1.1M11.608 23.23a10.5 10.5 0 01-2.327-.325M5.08 20.857a11.813 11.813 0 01-1.7-1.629M1.193 15.1a11.029 11.029 0 01-.4-2.315M1.439 8.156a10.145 10.145 0 011.03-2.112M5.709 2.673a12.434 12.434 0 012.078-1.1M12.392.77a10.5 10.5 0 012.327.325M18.92 3.143a11.813 11.813 0 011.695 1.629M22.807 8.9a11.029 11.029 0 01.4 2.315"
    />,
    <circle className="retouch-smile_svg__a" cx={12} cy={12} r={7.5} />,
    <path
      className="retouch-smile_svg__a"
      d="M13.982 14.557a4.1 4.1 0 01-3.964 0M9.75 10.155a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.3 10.155a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgRetouchSmile;
