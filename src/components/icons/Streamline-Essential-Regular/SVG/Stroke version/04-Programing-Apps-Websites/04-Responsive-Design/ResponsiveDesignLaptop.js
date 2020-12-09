import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-laptop_svg__a"
      d="M14.584 18.75a2.976 2.976 0 01-5.168 0H.75v1.5a3 3 0 003 3h16.5a3 3 0 003-3v-1.5zM2.25 18.75v-4.63M21.75 18.75v-4.63M9.75 6.75h4.5"
    />,
    <rect
      className="responsive-design-laptop_svg__a"
      x={0.75}
      y={0.75}
      width={9}
      height={13.5}
      rx={2.25}
      ry={2.25}
    />,
    <path
      className="responsive-design-laptop_svg__a"
      d="M9.75 11.25h-9M9.75 3.75h-9"
    />,
    <rect
      className="responsive-design-laptop_svg__a"
      x={14.25}
      y={0.75}
      width={9}
      height={13.5}
      rx={2.25}
      ry={2.25}
    />,
    <path
      className="responsive-design-laptop_svg__a"
      d="M23.25 11.25h-9M23.25 3.75h-9"
    />
  );

export default SvgResponsiveDesignLaptop;
