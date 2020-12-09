import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookClose2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-close-2_svg__a"
      d="M21 23.25H5.25A2.25 2.25 0 013 21M6 .75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25h15A.75.75 0 0021 18V1.5a.75.75 0 00-.75-.75zM19.5 23.25v-4.5"
    />
  );

export default SvgBookClose2;
