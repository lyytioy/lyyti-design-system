import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsDouble1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-double-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-double-1_svg__a"
      d="M20.793 16.027a.612.612 0 01-.221 1.078L16.5 18.734l-1.629 4.071a.612.612 0 01-1.078.222L1.207 10.441A2.782 2.782 0 01.5 8.734v-5a1 1 0 011-1h5a2.782 2.782 0 011.707.707z"
    />,
    <path
      className="tags-double-1_svg__a"
      d="M3.5.734h6.172a2 2 0 011.414.586L23.5 13.734l-1.5.5"
    />,
    <circle className="tags-double-1_svg__a" cx={5} cy={7.234} r={1.5} />
  );

export default SvgTagsDouble1;
