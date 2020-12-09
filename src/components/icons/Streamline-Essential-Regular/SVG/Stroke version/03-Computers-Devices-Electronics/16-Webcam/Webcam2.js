import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebcam2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webcam-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="webcam-2_svg__a"
      d="M18.308 17.934C17.25 19.5 18.75 22.5 20.25 23.25H3.75c1.5-.75 3-3.75 1.942-5.316"
    />,
    <circle className="webcam-2_svg__a" cx={12} cy={10.5} r={4.5} />,
    <path
      className="webcam-2_svg__a"
      d="M12 10.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M7.58 1.807A5.982 5.982 0 0012 3.75a5.982 5.982 0 004.42-1.943"
    />,
    <circle className="webcam-2_svg__a" cx={12} cy={10.5} r={9.75} />
  );

export default SvgWebcam2;
