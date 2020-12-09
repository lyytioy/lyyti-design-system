import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBinPaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-paper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bin-paper_svg__a"
      d="M20 .5l-1.921 22.087a1 1 0 01-1 .913H6.917a1 1 0 01-1-.913L4 .5M2.5.5h19M9 .5l1 23M15 .5l-1 23M5.478 17.5h13.044M4.957 11.5h14.086M4.435 5.5h15.13"
    />
  );

export default SvgBinPaper;
