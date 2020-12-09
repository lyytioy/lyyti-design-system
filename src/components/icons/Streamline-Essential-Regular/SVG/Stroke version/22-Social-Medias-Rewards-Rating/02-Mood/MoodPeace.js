import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodPeace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-peace_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-peace_svg__a"
      d="M20.175 16.573a1.771 1.771 0 01-3.542 0v-3.542a1.771 1.771 0 013.542 0zM16.633 15.392a1.771 1.771 0 01-3.542 0v-3.541a1.771 1.771 0 113.542 0z"
    />,
    <path
      className="mood-peace_svg__a"
      d="M9.869 11.25l1.016-8.95a1.714 1.714 0 113.412.331l-.815 8.11M6.441 11.25L5.5 2.628A1.714 1.714 0 118.913 2.3l.956 8.949M11.575 19.25a4 4 0 00-4-4h3.5a2 2 0 000-4h-4.75a2 2 0 00-2 2v5a3 3 0 001.608 2.658 2.6 2.6 0 011.392 2.3v.041M18.025 18.3a3.005 3.005 0 01-1.325 1.974 3.54 3.54 0 00-1.623 2.976"
    />
  );

export default SvgMoodPeace;
