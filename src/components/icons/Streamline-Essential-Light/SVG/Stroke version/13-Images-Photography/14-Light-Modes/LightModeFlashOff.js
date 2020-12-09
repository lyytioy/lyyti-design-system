import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeFlashOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-flash-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="light-mode-flash-off_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="light-mode-flash-off_svg__a"
      d="M7.096 7.096L3.868 3.868M20.132 20.131l-5.045-5.044M11.372 3.939a.928.928 0 01.738-.439h3.54c.275 0 .382.191.237.425L12.426 9.5h4.163c.275 0 .348.166.163.369l-9.108 9.963c-.186.2-.252.161-.149-.094l2.952-7.238H7.222a.273.273 0 01-.262-.439z"
    />
  );

export default SvgLightModeFlashOff;
