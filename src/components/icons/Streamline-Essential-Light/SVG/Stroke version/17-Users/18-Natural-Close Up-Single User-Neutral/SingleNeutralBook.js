import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-book_svg__cls-1"
      d="M20 .5H4.5a1.5 1.5 0 000 3h16a.5.5 0 01.5.5v19a.5.5 0 01-.5.5H5a2 2 0 01-2-2V2"
    />,
    <path
      className="single-neutral-book_svg__cls-1"
      d="M17.5 19.22s-2.02-.893-3.432-1.415c-.926-.345-.794-1.907-.258-2.494a4.285 4.285 0 001.259-3.532A3 3 0 0012 8.5a3 3 0 00-3.069 3.279 4.285 4.285 0 001.259 3.532c.536.587.668 2.149-.258 2.494C8.52 18.327 6.5 19.22 6.5 19.22"
      id="single-neutral-book_svg___Group_"
      data-name="&lt;Group&gt;"
    />
  );

export default SvgSingleNeutralBook;
