import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="like-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="like-circle_svg__a"
      d="M7.5 16.4a3.576 3.576 0 01.909.13l2.12.588a3.581 3.581 0 00.961.131h2.849a3.464 3.464 0 003.483-3.062L18 11.3a2.561 2.561 0 00-1.985-2.6l-.849-.181a.854.854 0 01-.663-.824V5.772a1.313 1.313 0 00-2.625 0v.88A4.314 4.314 0 017.5 10.9zM5.8 9.75h1.7v7.5H5.8"
    />
  );

export default SvgLikeCircle;
