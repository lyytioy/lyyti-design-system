import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-phone-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-phone-book_svg__cls-1"
      cx={12.75}
      cy={9.375}
      r={2.625}
    />,
    <path
      className="single-neutral-phone-book_svg__cls-1"
      d="M8.25 17.25a4.5 4.5 0 019 0M5.25.75v22.5M23.25 3v3M23.25 9v3M23.25 15v3"
    />,
    <rect
      className="single-neutral-phone-book_svg__cls-1"
      x={0.75}
      y={0.75}
      width={19.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSingleNeutralPhoneBook;
