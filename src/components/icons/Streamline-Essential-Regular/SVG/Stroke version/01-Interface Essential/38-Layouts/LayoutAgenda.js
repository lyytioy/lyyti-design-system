import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutAgenda = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-agenda_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-agenda_svg__a"
      x={0.75}
      y={0.747}
      width={22.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-agenda_svg__a"
      x={0.75}
      y={14.247}
      width={22.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgLayoutAgenda;
