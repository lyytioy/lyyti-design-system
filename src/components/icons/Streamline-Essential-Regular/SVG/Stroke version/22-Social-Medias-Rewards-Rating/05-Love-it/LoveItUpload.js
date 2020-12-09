import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="love-it-upload_svg__a" cx={17.247} cy={17.25} r={6} />,
    <path
      className="love-it-upload_svg__a"
      d="M17.247 20.25v-6M17.247 14.25l-2.25 2.25M17.247 14.25l2.25 2.25M8.223 16.5l-5.811-6.065a5.672 5.672 0 01-1.063-6.548 5.672 5.672 0 019.085-1.474L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.474A5.676 5.676 0 0122.632 9"
    />
  );

export default SvgLoveItUpload;
