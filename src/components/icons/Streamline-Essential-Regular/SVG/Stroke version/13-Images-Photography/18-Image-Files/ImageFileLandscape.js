import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-landscape_svg__a"
      d="M22.477 21.75a1.5 1.5 0 01-1.5 1.5H3.023a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.047.426l2.955 2.883a1.5 1.5 0 01.452 1.074z"
    />,
    <circle
      className="image-file-landscape_svg__a"
      cx={8.273}
      cy={7.5}
      r={2.25}
    />,
    <path
      className="image-file-landscape_svg__a"
      d="M18.813 18.2l-3.925-5.888a1.011 1.011 0 00-1.671-.019l-2.691 3.845L8.858 14.8a1.011 1.011 0 00-1.474.229L5.273 18.2"
    />
  );

export default SvgImageFileLandscape;
