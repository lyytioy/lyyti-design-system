import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextOptions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-options_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="text-options_svg__a"
      x={0.75}
      y={15.748}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="text-options_svg__a"
      d="M8.25 8.248h7.5M15 12.748h1.5M7.5 12.748H9M8.25 12.748V4.5a3.75 3.75 0 017.5 0v8.25M19.5 18.748h-3l1.5 1.5 1.5-1.5z"
    />
  );

export default SvgTextOptions;
