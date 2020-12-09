import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTv4K = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-4k_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-4k_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="modern-tv-4k_svg__a"
      d="M14.25 22.5h-4.5l.75-4.5h3l.75 4.5zM6.75 22.5h10.5M12.75 13.5V6M17.25 13.5l-4.5-3.75L17.25 6M9.75 13.5V12M9.75 12V6.015A8.258 8.258 0 005.269 12H9.75"
    />
  );

export default SvgModernTv4K;
