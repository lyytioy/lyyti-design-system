import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-book_svg__a"
      d="M22.158 6.325l-2.233-2.233a1.166 1.166 0 00-.825-.342H4.9a1.166 1.166 0 00-.825.342L1.842 6.325a1.166 1.166 0 00-.342.825v11.933a1.166 1.166 0 001.167 1.167h18.666a1.166 1.166 0 001.167-1.167V7.15a1.166 1.166 0 00-.342-.825zM12 3.75v16.5"
    />
  );

export default SvgCommonFileBook;
