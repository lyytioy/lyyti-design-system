import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-upload_svg__a"
      d="M9.257 18.607L2.2 11.339a5.667 5.667 0 01-1.087-6.607A5.84 5.84 0 0110.4 3.245L12 4.7l1.6-1.459a5.84 5.84 0 019.287 1.487 5.659 5.659 0 01.192 4.7"
    />,
    <circle className="love-it-upload_svg__a" cx={17.5} cy={16.432} r={6} />,
    <path
      className="love-it-upload_svg__a"
      d="M17.5 19.432v-6M17.5 13.432l-2.25 2.25M17.5 13.432l2.25 2.25"
    />
  );

export default SvgLoveItUpload;
