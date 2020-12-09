import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBinPaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-paper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bin-paper_svg__a"
      d="M18.5 22.09a1.544 1.544 0 01-1.513 1.16H7.018A1.545 1.545 0 015.5 22.09L.791 2.59a1.459 1.459 0 01.3-1.273A1.577 1.577 0 012.3.75h19.4a1.574 1.574 0 011.217.567 1.463 1.463 0 01.3 1.273zM7.339.75l2.33 22.5M16.662.75l-2.331 22.5M1.796 6.75h20.408M3.247 12.75h17.507M4.697 18.75h14.607"
    />
  );

export default SvgBinPaper;
