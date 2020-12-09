import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShutter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shutter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lens-shutter_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="lens-shutter_svg__a" cx={12} cy={12} r={8.5} />,
    <path
      className="lens-shutter_svg__a"
      d="M4.271 15.5H14M11.158 20.459l4.873-8.441M18.904 16.959l-4.873-8.441M19.5 8.5H10M12.843 3.542l-4.874 8.44M5.096 7.041l4.873 8.441"
    />
  );

export default SvgLensShutter;
