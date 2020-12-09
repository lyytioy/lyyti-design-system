import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="shrink-4_svg__a"
      x={9.515}
      y={9.514}
      width={5}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="shrink-4_svg__a"
      d="M.531 23.499l6.984-6.985M16.515 7.514L23.5.529M21.515 7.514h-5v-5M7.515 21.514v-5h-5M.523.521l6.992 6.993M16.515 16.514l6.985 6.985M16.515 21.514v-5h5M2.515 7.514h5v-5"
    />
  );

export default SvgShrink4;
