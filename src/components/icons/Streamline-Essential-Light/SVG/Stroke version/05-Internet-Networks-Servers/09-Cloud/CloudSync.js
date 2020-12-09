import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-sync_svg__a"
      d="M20.5 13.907A4.313 4.313 0 0023 9.858a4.711 4.711 0 00-4.954-4.635A6.707 6.707 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3M9.5 17.501H6v3.5M17.417 18.734A5.572 5.572 0 016.6 17.5"
    />,
    <path
      className="cloud-sync_svg__a"
      d="M14.5 15.501H18v-3.5M6.583 14.268A5.572 5.572 0 0117.4 15.5"
    />
  );

export default SvgCloudSync;
