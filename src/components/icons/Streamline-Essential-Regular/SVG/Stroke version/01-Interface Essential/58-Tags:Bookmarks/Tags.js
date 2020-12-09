import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTags = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags_svg__a"
      d="M1.061 2.56v6.257a3 3 0 00.878 2.121L13.5 22.5a1.5 1.5 0 002.121 0l6.879-6.88a1.5 1.5 0 000-2.121L10.939 1.938a3 3 0 00-2.121-.878H2.561a1.5 1.5 0 00-1.5 1.5z"
    />,
    <circle className="tags_svg__a" cx={6.311} cy={6.31} r={1.5} />
  );

export default SvgTags;
