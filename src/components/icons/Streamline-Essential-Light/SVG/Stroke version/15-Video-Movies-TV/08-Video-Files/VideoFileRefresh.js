import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-refresh_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="video-file-refresh_svg__a"
      d="M12.607 10.89L7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l2.175-1.338M20 17.5h3.5V14M17.5 23.5a5.5 5.5 0 115.475-6"
    />,
    <path className="video-file-refresh_svg__a" d="M23.5 14v3.5H20" />
  );

export default SvgVideoFileRefresh;
