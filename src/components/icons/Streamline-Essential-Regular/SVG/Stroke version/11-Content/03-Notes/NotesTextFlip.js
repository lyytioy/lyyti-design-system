import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesTextFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-text-flip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-text-flip_svg__a"
      d="M13.629 23.25H2.25a1.5 1.5 0 01-1.5-1.5v-18a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v9.879a1.5 1.5 0 01-.439 1.06l-8.122 8.122a1.5 1.5 0 01-1.06.439z"
    />,
    <path
      className="notes-text-flip_svg__a"
      d="M14.25 23.115V15.75a1.5 1.5 0 011.5-1.5h7.365M5.25.75v3M18.75.75v3M5.25 8.25h12M5.25 12.75h5.25"
    />
  );

export default SvgNotesTextFlip;
