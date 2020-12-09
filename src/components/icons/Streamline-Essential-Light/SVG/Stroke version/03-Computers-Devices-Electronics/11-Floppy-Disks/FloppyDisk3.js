import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".floppy-disk-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="floppy-disk-3_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="floppy-disk-3_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="floppy-disk-3_svg__a"
      d="M9.672 7.138a.5.5 0 00.146.46.5.5 0 00.466.123 7.667 7.667 0 013.433 0 .5.5 0 00.611-.584l-.763-3.814a.5.5 0 00-.392-.392 4.777 4.777 0 00-2.346 0 .5.5 0 00-.392.392zM8.952 16.447a.5.5 0 00.2-.821 7.668 7.668 0 01-1.716-2.973.5.5 0 00-.811-.238L3.7 14.983a.5.5 0 00-.144.536 4.774 4.774 0 001.176 2.031.5.5 0 00.535.143zM17.373 12.415a.5.5 0 00-.81.238 7.67 7.67 0 01-1.717 2.973.5.5 0 00.2.821l3.684 1.246a.5.5 0 00.536-.143 4.78 4.78 0 001.172-2.031.5.5 0 00-.143-.536z"
    />
  );

export default SvgFloppyDisk3;
