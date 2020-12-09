import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntennaTower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-tower_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="antenna-tower_svg__a"
      d="M.5 23.5h23M9.5 23.5h-9V8a.5.5 0 01.5-.5h8a.5.5 0 01.5.5zM21.5 14a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v9.5h4zM15.5 14a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v9.5h4zM6.5 6a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v1.5h3zM4.5 5.5v-4M2.5 10.5h5M2.5 13.5h5M2.5 16.5h5M2.5 19.5h5M12.5 7A2.5 2.5 0 0010 4.5M14.5 7A4.5 4.5 0 0010 2.5M16.5 7A6.5 6.5 0 0010 .5"
    />
  );

export default SvgAntennaTower;
