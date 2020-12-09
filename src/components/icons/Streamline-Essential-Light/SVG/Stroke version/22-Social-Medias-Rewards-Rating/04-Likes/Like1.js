import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLike1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-1_svg__a"
      d="M20 15.659a1.5 1.5 0 110 3h-1a1.5 1.5 0 011.5 1.5c0 .829-.672 1-1.5 1h-6.5c-2.851 0-3.5-.5-7-1v-8.5c2.45 0 6.5-4.5 6.5-8.5 0-1.581 2.189-2.17 3 .719.5 1.781-1 5.281-1 5.281h8a1.5 1.5 0 011.5 1.5c0 .829-.672 2-1.5 2h-1a1.5 1.5 0 010 3h-1M.5 10.159h5v12h-5zM3.25 19.659"
    />,
    <path
      className="like-1_svg__a"
      d="M3.25 19.659a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgLike1;
