import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-lock_svg__a"
      d="M20.5 13.906A4.313 4.313 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.707 6.707 0 0012 1.5a6.605 6.605 0 00-6.675 6.108A3.561 3.561 0 001 11.017 3.186 3.186 0 003.5 14.3M17 21.5a1 1 0 01-1 1H9a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1z"
    />,
    <circle className="cloud-lock_svg__a" cx={12.5} cy={18.563} r={1.25} />,
    <path className="cloud-lock_svg__a" d="M15 13a2.5 2.5 0 00-5 0v1.5h5z" />
  );

export default SvgCloudLock;
