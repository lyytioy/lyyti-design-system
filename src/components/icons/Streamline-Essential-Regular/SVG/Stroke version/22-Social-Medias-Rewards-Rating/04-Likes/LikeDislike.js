import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeDislike = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-dislike_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="like-dislike_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="like-dislike_svg__a"
      d="M7.5 7.6a3.576 3.576 0 00.909-.13l2.12-.588a3.581 3.581 0 01.961-.131h2.849a3.464 3.464 0 013.483 3.062L18 12.7a2.561 2.561 0 01-1.985 2.6l-.849.181a.854.854 0 00-.663.824v1.917a1.313 1.313 0 01-2.625 0v-.88A4.314 4.314 0 007.5 13.1zM5.8 14.247h1.7v-7.5H5.8"
    />
  );

export default SvgLikeDislike;
