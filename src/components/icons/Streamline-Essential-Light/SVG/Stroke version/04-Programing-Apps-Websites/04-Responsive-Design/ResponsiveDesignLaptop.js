import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-laptop_svg__a"
      d="M4.5 17.5v3M15.5 9.5h-7M19.5 20.5v-3"
    />,
    <rect
      className="responsive-design-laptop_svg__a"
      x={15.5}
      y={0.5}
      width={8}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design-laptop_svg__a"
      d="M15.5 11.5v1a1 1 0 001 1h6a1 1 0 001-1v-1M23.5 4.5v-1a1 1 0 00-1-1h-6a1 1 0 00-1 1v1M13.5 20.5a1.5 1.5 0 01-3 0h-8v1a2 2 0 002 2h15a2 2 0 002-2v-1z"
    />,
    <rect
      className="responsive-design-laptop_svg__a"
      x={0.5}
      y={0.5}
      width={8}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design-laptop_svg__a"
      d="M8.5 2.5h-8M8.5 11.5h-8M4.5 13.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M4.5 13.25"
    />
  );

export default SvgResponsiveDesignLaptop;
