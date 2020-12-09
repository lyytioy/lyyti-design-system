import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureSun = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-sun_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-sun_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="picture-sun_svg__a" cx={16.5} cy={7.5} r={3} />,
    <path
      className="picture-sun_svg__a"
      d="M3.961 14.959a8.194 8.194 0 0111.694 4.149M14.382 16.918a4.449 4.449 0 015.851-.125"
    />
  );

export default SvgPictureSun;
