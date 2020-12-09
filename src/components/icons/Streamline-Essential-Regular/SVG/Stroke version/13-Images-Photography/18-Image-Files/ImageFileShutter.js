import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileShutter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-shutter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-shutter_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <circle className="image-file-shutter_svg__a" cx={12} cy={12.75} r={6} />,
    <circle className="image-file-shutter_svg__a" cx={12} cy={12.75} r={1.5} />,
    <path
      className="image-file-shutter_svg__a"
      d="M13.06 11.69l3.183-3.183M10.94 13.81l-3.183 3.183M13.06 13.81l3.183 3.183M10.94 11.69L7.757 8.507"
    />
  );

export default SvgImageFileShutter;
