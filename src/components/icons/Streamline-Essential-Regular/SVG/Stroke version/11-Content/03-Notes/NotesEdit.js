import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-edit_svg__a"
      d="M22.63 14.862L15 22.492l-3.75.75.75-3.75 7.63-7.63a2.116 2.116 0 012.992 0l.008.009a2.113 2.113 0 010 2.991zM8.25 20.242h-6a1.464 1.464 0 01-1.5-1.5V3.849a1.557 1.557 0 011.5-1.607h15a1.557 1.557 0 011.5 1.607v4.393M5.25.742v4.5M9.75.742v4.5M14.25.742v4.5"
    />
  );

export default SvgNotesEdit;
