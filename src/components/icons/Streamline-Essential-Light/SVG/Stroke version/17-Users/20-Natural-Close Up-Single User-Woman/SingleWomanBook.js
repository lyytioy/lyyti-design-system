import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-book_svg__cls-1"
      d="M20 .5H4.5a1.5 1.5 0 000 3h16a.5.5 0 01.5.5v19a.5.5 0 01-.5.5H5a2 2 0 01-2-2V2"
    />,
    <path
      className="single-woman-book_svg__cls-1"
      d="M13.853 16.19a6.335 6.335 0 003.745-.783.5.5 0 00.143-.751c-.433-.508-.733-1.178-.866-3.133-.251-3.716-2.758-5.023-4.911-5.023s-4.659 1.307-4.911 5.023c-.132 1.955-.433 2.625-.866 3.133a.5.5 0 00.143.751 6.343 6.343 0 003.745.783"
    />,
    <path
      className="single-woman-book_svg__cls-1"
      d="M17.307 18.716c-.853-.352-1.862-.713-2.959-1.119a.759.759 0 01-.5-.709v-1.38a.754.754 0 01.247-.559 2.717 2.717 0 00.886-2.027v-1.1a.988.988 0 00-.7-.946A4.9 4.9 0 0112.3 9.692a.494.494 0 00-.679 0 4.9 4.9 0 01-1.987 1.181.988.988 0 00-.7.946v1.1a2.719 2.719 0 00.886 2.027.754.754 0 01.247.559v1.38a.759.759 0 01-.495.709c-1.1.406-2.105.767-2.959 1.119"
    />
  );

export default SvgSingleWomanBook;
