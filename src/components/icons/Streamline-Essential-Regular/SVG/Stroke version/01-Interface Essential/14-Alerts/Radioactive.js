import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioactive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radioactive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="radioactive_svg__a" cx={12.025} cy={11} r={1.5} />,
    <path
      className="radioactive_svg__a"
      d="M17.95 1.04a.753.753 0 00-1.068.248l-2.8 4.848a.75.75 0 00.262 1.017 4.492 4.492 0 012.134 3.205.749.749 0 00.742.642h5.28a.748.748 0 00.748-.8 11.98 11.98 0 00-5.298-9.16zM9.7 7.153a.749.749 0 00.262-1.017l-2.8-4.848A.75.75 0 006.1 1.04 11.983 11.983 0 00.8 10.2a.751.751 0 00.748.8h5.28a.749.749 0 00.742-.642A4.5 4.5 0 019.7 7.153zM14.265 14.881a4.364 4.364 0 01-4.481 0l-3.367 5.833a.751.751 0 00.316 1.048 11.928 11.928 0 0010.583 0 .749.749 0 00.317-1.048z"
    />
  );

export default SvgRadioactive;
