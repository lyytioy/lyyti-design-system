import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-warning_svg__a"
      d="M9.5 18.427l-7.3-7.519A5.667 5.667 0 011.112 4.3 5.839 5.839 0 0110.4 2.814L12 4.273l1.6-1.459A5.84 5.84 0 0122.887 4.3a5.664 5.664 0 01-.711 6.2M17.5 19a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.5 16.999v-3"
    />,
    <path
      className="love-it-warning_svg__a"
      d="M18.338 11a.95.95 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.947.947 0 00.807.449h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgLoveItWarning;
