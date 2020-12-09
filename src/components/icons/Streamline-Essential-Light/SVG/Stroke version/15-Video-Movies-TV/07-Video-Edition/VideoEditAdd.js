import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-add_svg__a"
      d="M15.509 9.513v-8a1 1 0 00-1-1h-13a1 1 0 00-1 1v18a1 1 0 001 1h8"
    />,
    <path
      className="video-edit-add_svg__a"
      d="M12.509.513v8h-9v-8M3.509 4.513h-3M3.509 8.513h-3M15.509 4.513h-3M15.509 8.513h-3M3.509 20.513v-8h7M3.509 12.513h-3M3.509 16.513h-3"
    />,
    <circle className="video-edit-add_svg__a" cx={17.509} cy={17.513} r={6} />,
    <path
      className="video-edit-add_svg__a"
      d="M17.509 14.513v6M20.509 17.513h-6"
    />
  );

export default SvgVideoEditAdd;
