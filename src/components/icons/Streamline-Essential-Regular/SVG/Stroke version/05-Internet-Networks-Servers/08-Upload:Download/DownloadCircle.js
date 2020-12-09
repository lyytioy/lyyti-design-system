import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-circle_svg__a"
      d="M8.25 14.25L12 18l3.75-3.75M12 6.75V18"
    />,
    <circle className="download-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgDownloadCircle;
