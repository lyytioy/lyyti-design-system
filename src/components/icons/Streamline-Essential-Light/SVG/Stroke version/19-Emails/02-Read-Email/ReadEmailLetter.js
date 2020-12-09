import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-letter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="read-email-letter_svg__a"
      x={0.5}
      y={10.5}
      width={23}
      height={13}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="read-email-letter_svg__a"
      d="M17.5 13.5h4v4h-4zM3.5 14.5h2M3.5 18.5H9M3.5 20.5H12M3.5 10.5v-9a1 1 0 011-1h10l6 6v4"
    />,
    <path
      className="read-email-letter_svg__a"
      d="M14.5.5v6h6M6.5 5.5H10M6.5 7.5h6"
    />
  );

export default SvgReadEmailLetter;
