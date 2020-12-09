import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebcam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webcam_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="webcam_svg__a"
      d="M.5 23.5l5.219-5.219M23.5 23.5l-5.219-5.219"
    />,
    <circle className="webcam_svg__a" cx={12} cy={10.5} r={10} />,
    <circle className="webcam_svg__a" cx={12} cy={10.5} r={4} />,
    <path
      className="webcam_svg__a"
      d="M10 10.5a2 2 0 012-2M12 3.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgWebcam;
