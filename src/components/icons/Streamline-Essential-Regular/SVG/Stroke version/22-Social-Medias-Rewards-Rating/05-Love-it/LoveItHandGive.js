import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItHandGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-hand-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-hand-give_svg__a"
      d="M.75 14.25v9M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M15.75 13.875L9.358 7.207a3.785 3.785 0 01-.709-4.366 3.782 3.782 0 016.057-.983L15.75 2.9l1.044-1.044a3.782 3.782 0 016.057.983 3.783 3.783 0 01-.709 4.366z"
    />
  );

export default SvgLoveItHandGive;
