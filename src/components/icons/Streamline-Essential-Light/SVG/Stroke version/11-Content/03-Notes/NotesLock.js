import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-lock_svg__a"
      d="M11.5 20.5h-10a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4"
    />,
    <rect
      className="notes-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="notes-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path className="notes-lock_svg__a" d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z" />
  );

export default SvgNotesLock;
