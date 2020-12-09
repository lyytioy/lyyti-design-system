import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntennaTower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-tower_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="antenna-tower_svg__a"
      d="M.75 23.25H21M9.75 23.25h-9V7.992a.5.5 0 01.5-.492h8a.5.5 0 01.5.492z"
    />,
    <path
      className="antenna-tower_svg__a"
      d="M7.5 5.144a.7.7 0 00-.75-.644h-3a.7.7 0 00-.75.644V7.5h4.5zM5.25 4.5V.75M3.75 10.5h3M3.75 13.5h3M3.75 16.5h3M3.75 19.5h3M12.906 5.421a5.961 5.961 0 015.829 5.829M13.905.764a9.751 9.751 0 019.33 9.288M17.25 14.25H13.5a.75.75 0 00-.75.75v8.25H18V15a.75.75 0 00-.75-.75z"
    />
  );

export default SvgAntennaTower;
