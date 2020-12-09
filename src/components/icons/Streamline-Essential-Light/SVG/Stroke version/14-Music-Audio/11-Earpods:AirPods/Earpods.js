import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpods = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="earpods_svg__a"
      d="M6 8.5A1.5 1.5 0 017.5 10M10.5 22.5a1 1 0 01-1 1h-1a1 1 0 01-1-1V10a5.9 5.9 0 01-2.5.5A5.712 5.712 0 01.759 8.679 1 1 0 01.5 8.007V2.993a1 1 0 01.259-.672A5.712 5.712 0 015 .5a5.268 5.268 0 015.5 5z"
    />,
    <path
      className="earpods_svg__a"
      d="M3 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M18 8.5a1.5 1.5 0 00-1.5 1.5"
    />,
    <path
      className="earpods_svg__a"
      d="M13.5 22.5a1 1 0 001 1h1a1 1 0 001-1V10a5.9 5.9 0 002.5.5 5.712 5.712 0 004.241-1.821 1 1 0 00.259-.672V2.993a1 1 0 00-.259-.672A5.712 5.712 0 0019 .5a5.268 5.268 0 00-5.5 5z"
    />,
    <path
      className="earpods_svg__a"
      d="M21 5.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgEarpods;
