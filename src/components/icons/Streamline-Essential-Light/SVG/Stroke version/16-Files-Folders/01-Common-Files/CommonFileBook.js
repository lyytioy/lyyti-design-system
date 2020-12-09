import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-book_svg__a"
      d="M12 3v18M22.707 5.707l-2.414-2.414A1 1 0 0019.586 3H4.414a1 1 0 00-.707.293L1.293 5.707A1 1 0 001 6.414V20a1 1 0 001 1h20a1 1 0 001-1V6.414a1 1 0 00-.293-.707z"
    />
  );

export default SvgCommonFileBook;
