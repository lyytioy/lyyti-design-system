import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file_svg__a"
      d="M11.726 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L8.25.75h3zM9.75 9.75a.375.375 0 11-.375.375.375.375 0 01.375-.375M9.75 14.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M9.75 18.75a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="zip-file_svg__a"
      d="M20.25 23.25H3.75a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h13.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V21.75a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgZipFile;
