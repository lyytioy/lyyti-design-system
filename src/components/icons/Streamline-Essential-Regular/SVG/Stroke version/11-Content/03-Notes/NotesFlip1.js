import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesFlip1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-flip-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-flip-1_svg__a"
      d="M14.689 19.811a1.5 1.5 0 01-1.06.439H2.25a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v9.879a1.5 1.5 0 01-.439 1.06zM5.25.75v3M15.75.75v3"
    />,
    <path
      className="notes-flip-1_svg__a"
      d="M20.115 14.25H15.75a1.5 1.5 0 00-1.5 1.5v4.365"
    />,
    <path
      className="notes-flip-1_svg__a"
      d="M23.25 10.5v11.25a1.5 1.5 0 01-1.5 1.5h-15"
    />
  );

export default SvgNotesFlip1;
