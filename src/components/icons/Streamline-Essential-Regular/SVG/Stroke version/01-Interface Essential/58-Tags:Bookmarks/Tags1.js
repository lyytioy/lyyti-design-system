import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTags1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-1_svg__a"
      d="M1.135 2.634v6.258a3 3 0 00.879 2.121l11.63 11.63a.75.75 0 001.266-.383l1.225-6.126 6.126-1.225a.75.75 0 00.383-1.266l-11.63-11.63a3 3 0 00-2.121-.879H2.635a1.5 1.5 0 00-1.5 1.5z"
    />,
    <circle className="tags-1_svg__a" cx={6.385} cy={6.384} r={1.5} />
  );

export default SvgTags1;
