import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileHorizontalImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-horizontal-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="common-file-horizontal-image_svg__a"
      cx={7.08}
      cy={8.5}
      r={1.875}
    />,
    <path
      className="common-file-horizontal-image_svg__a"
      d="M20.2 16.955L15.828 10.4a.844.844 0 00-1.393-.015L12.19 13.6l-1.39-1.117a.843.843 0 00-1.229.191l-2.865 4.3"
    />,
    <path
      className="common-file-horizontal-image_svg__a"
      d="M2.25 3.023a1.5 1.5 0 00-1.5 1.5v14.954a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-.426-1.047l-2.883-2.955a1.5 1.5 0 00-1.074-.452z"
    />
  );

export default SvgCommonFileHorizontalImage;
