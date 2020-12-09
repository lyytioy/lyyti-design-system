import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeShine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-shine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="like-shine_svg__a"
      d="M19.5 6.75v-3M18 5.25h3M6.75 3.75v-3M5.25 2.25h3M2.25 9V6M.75 7.5h3M.75 12h2.143a8.025 8.025 0 008.035-7.863c0-1.591 3.215-1.792 3.215 1.226a30.056 30.056 0 01-1.071 5.816l-.021.071h8.7a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010 3H19.5a1.5 1.5 0 010 3h-.75a1.5 1.5 0 010 3h-7.286C7.179 23.25 9.321 21 .75 21"
    />
  );

export default SvgLikeShine;
