import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebcam2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webcam-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="webcam-2_svg__a" cx={12} cy={9.5} r={9} />,
    <path
      className="webcam-2_svg__a"
      d="M7.391 17.231A6.987 6.987 0 005 22.5a1 1 0 001 1h12a1 1 0 001-1 6.987 6.987 0 00-2.391-5.269M7.966 1.454A4.993 4.993 0 0012 3.5a4.993 4.993 0 004.034-2.046"
    />,
    <circle className="webcam-2_svg__a" cx={12} cy={9.5} r={1.5} />,
    <circle className="webcam-2_svg__a" cx={12} cy={9.5} r={4} />
  );

export default SvgWebcam2;
