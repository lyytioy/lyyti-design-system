import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileShutter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-shutter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-shutter_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <circle className="image-file-shutter_svg__a" cx={12} cy={14} r={5.5} />,
    <path
      className="image-file-shutter_svg__a"
      d="M7.1 16.5h6.309M11.682 19.491l3.17-5.492M16.598 17.022L13.409 11.5M16.904 11.5H10.59M12.316 8.509L9.147 14M7.402 10.978l3.189 5.522"
    />
  );

export default SvgImageFileShutter;
