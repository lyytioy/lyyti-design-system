import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlusBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-plus-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-plus-bubble_svg__a"
      d="M12.503 7v10.5M18.003 12.5h-10.5M23.5 12a4 4 0 00-2.523-3.718 4 4 0 00-5.258-5.259 4 4 0 00-7.436 0 4 4 0 00-5.259 5.259 4 4 0 000 7.436 4 4 0 005.258 5.259 4 4 0 007.436 0 4 4 0 005.258-5.259A4 4 0 0023.5 12z"
    />
  );

export default SvgLikePlusBubble;
