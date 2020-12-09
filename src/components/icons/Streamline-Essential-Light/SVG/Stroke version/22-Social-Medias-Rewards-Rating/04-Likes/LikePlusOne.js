import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlusOne = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-plus-one_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-plus-one_svg__a"
      d="M23.5 6.5H.5v14a2 2 0 002 2h19a2 2 0 002-2zM.5 6.5v-3a2 2 0 012-2h19a2 2 0 012 2v3M16.5 1.5v5M7.5 1.5v5M8.5 11.5v6M11.5 14.5h-6"
    />,
    <path className="like-plus-one_svg__a" d="M15.5 19l1-9-3 2" />
  );

export default SvgLikePlusOne;
