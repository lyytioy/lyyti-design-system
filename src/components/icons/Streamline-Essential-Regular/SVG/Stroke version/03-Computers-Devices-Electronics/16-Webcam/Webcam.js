import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebcam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webcam_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="webcam_svg__a" cx={12} cy={10.5} r={9.75} />,
    <path
      className="webcam_svg__a"
      d="M3 23.25l3.768-4.521M21 23.25l-3.768-4.521"
    />,
    <circle className="webcam_svg__a" cx={12} cy={10.5} r={3.75} />,
    <path
      className="webcam_svg__a"
      d="M12 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgWebcam;
