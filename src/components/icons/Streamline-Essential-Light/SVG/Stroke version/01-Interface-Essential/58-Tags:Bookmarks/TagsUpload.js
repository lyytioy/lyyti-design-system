import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-upload_svg__a"
      d="M16.542 9.049l1.8-1.837a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.05-1.072"
    />,
    <circle className="tags-upload_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <circle className="tags-upload_svg__a" cx={17.042} cy={17.498} r={6} />,
    <path
      className="tags-upload_svg__a"
      d="M17.042 20.498v-6M17.042 14.498l-2.25 2.25M17.042 14.498l2.25 2.25"
    />
  );

export default SvgTagsUpload;
