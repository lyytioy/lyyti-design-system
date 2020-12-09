import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileHorizontalImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-horizontal-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-horizontal-image_svg__a"
      d="M6.5 16.5l2.45-3.151a1 1 0 011.274-.206L12 14.5l1.663-2.14a1 1 0 011.587.067L18 16.5z"
    />,
    <circle
      className="common-file-horizontal-image_svg__a"
      cx={8}
      cy={9}
      r={1.5}
    />,
    <path
      className="common-file-horizontal-image_svg__a"
      d="M19.5 3.793a1 1 0 00-.707-.293H1.5a1 1 0 00-1 1v15a1 1 0 001 1h21a1 1 0 001-1V8.207a1 1 0 00-.293-.707z"
    />
  );

export default SvgCommonFileHorizontalImage;
