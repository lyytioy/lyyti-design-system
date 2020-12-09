import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-expand_svg__a"
      d="M4.5 4.5h19M7.25 2.5a.25.25 0 00.5 0 .25.25 0 00-.5 0zM9.25 2.5a.25.25 0 00.5 0 .25.25 0 00-.5 0zM11.25 2.5a.25.25 0 00.5 0 .25.25 0 00-.5 0z"
    />,
    <path
      className="responsive-design-expand_svg__a"
      d="M4.5 11.5v-9a2 2 0 012-2h15a2 2 0 012 2v10a2 2 0 01-2 2h-6"
    />,
    <rect
      className="responsive-design-expand_svg__a"
      x={0.5}
      y={13.5}
      width={13}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="responsive-design-expand_svg__a"
      d="M.5 16.5h13M14.5 11.5l4-4M15.5 7.5h3v3M12.5 11.5l-4-4M11.5 7.5h-3v3"
    />
  );

export default SvgResponsiveDesignExpand;
