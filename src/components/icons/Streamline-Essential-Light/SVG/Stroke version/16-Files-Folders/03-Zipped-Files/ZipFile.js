import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <path
      className="zip-file_svg__a"
      d="M9.755 8a.25.25 0 11-.25-.25.25.25 0 01.25.25M9.755 10.5a.25.25 0 11-.25-.25.25.25 0 01.25.25M9.755 13a.25.25 0 11-.25-.25.25.25 0 01.25.25M9.745 15.5a.25.25 0 11-.25-.25.249.249 0 01.25.25M9.745 18.021a.25.25 0 11-.25-.25.249.249 0 01.25.25M9.745 20.562a.25.25 0 11-.25-.25.249.249 0 01.25.25M10.989 4.111a1.488 1.488 0 01-.357 1.163 1.467 1.467 0 01-1.1.5H9.47a1.467 1.467 0 01-1.1-.5 1.488 1.488 0 01-.357-1.163L8.37.5h2.13z"
    />
  );

export default SvgZipFile;
