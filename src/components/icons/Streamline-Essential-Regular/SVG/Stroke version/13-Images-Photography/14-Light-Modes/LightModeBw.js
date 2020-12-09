import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeBw = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-bw_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="light-mode-bw_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="light-mode-bw_svg__a"
      d="M6 15.75v-7.5M6 8.25h1.5A1.5 1.5 0 019 9.75v.75A1.5 1.5 0 017.5 12H6M6 12h1.5A1.5 1.5 0 019 13.5v.75a1.5 1.5 0 01-1.5 1.5H6M12 8.25v2.017a8.982 8.982 0 00.644 3.342l.856 2.141L15 10.5l1.5 5.25.856-2.141A8.982 8.982 0 0018 10.267V8.25"
    />
  );

export default SvgLightModeBw;
