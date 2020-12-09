import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".floppy-disk-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="floppy-disk-1_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1H3.914a1 1 0 00-.707.293L.793 3.207a1 1 0 00-.293.707V22.5a1 1 0 001 1h21a1 1 0 001-1z"
    />,
    <path
      className="floppy-disk-1_svg__a"
      d="M4.5.5h15v5h-15zM4.5 20.5h15v3h-15z"
    />,
    <circle className="floppy-disk-1_svg__a" cx={12} cy={11.5} r={4} />,
    <path
      className="floppy-disk-1_svg__a"
      d="M14.5 18.5h5M10 10.5v2M12 11.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgFloppyDisk1;
