import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsAlert = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-alert_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-alert_svg__a"
      d="M18.342 7.212a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007z"
    />,
    <circle className="tags-alert_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <path
      className="tags-alert_svg__a"
      d="M17.042 20.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.042 18.498v-3"
    />,
    <path
      className="tags-alert_svg__a"
      d="M17.88 12.5a.95.95 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.947.947 0 00.807.449H22.1a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgTagsAlert;
