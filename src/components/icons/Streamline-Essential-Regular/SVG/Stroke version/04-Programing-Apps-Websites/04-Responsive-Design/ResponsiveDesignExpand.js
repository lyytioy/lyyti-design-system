import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-expand_svg__a"
      d="M15.75 17.25h6a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v9.005M2.25 5.25h21"
    />,
    <rect
      className="responsive-design-expand_svg__a"
      x={0.75}
      y={14.25}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path className="responsive-design-expand_svg__a" d="M.75 17.25h12" />
  );

export default SvgResponsiveDesignExpand;
