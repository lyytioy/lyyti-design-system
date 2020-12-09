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
    <g id="single-neutral-book_svg___10_12_5" data-name="10*12.5">
      <path
        className="single-neutral-book_svg__cls-1"
        d="M17.5 19.5a5 5 0 00-10 0z"
      />
      <circle
        className="single-neutral-book_svg__cls-1"
        cx={12.5}
        cy={10}
        r={3}
      />
    </g>
  );

export default SvgSingleNeutralBook;
