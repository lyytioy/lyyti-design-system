import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="download-circle_svg__a" cx={12} cy={12} r={11} />,
    <path
      className="download-circle_svg__a"
      d="M12 18.5v-13M17.5 13L12 18.5 6.5 13"
    />
  );

export default SvgDownloadCircle;
