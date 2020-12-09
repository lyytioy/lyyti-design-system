import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-image_svg__a"
      d="M20.5 13.906A4.313 4.313 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.707 6.707 0 0012 1.5a6.605 6.605 0 00-6.675 6.108A3.561 3.561 0 001 11.017 3.186 3.186 0 003.5 14.3"
    />,
    <path
      className="cloud-image_svg__a"
      d="M17 22.5H7a1 1 0 01-1-1v-10a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1z"
    />,
    <circle className="cloud-image_svg__a" cx={10.125} cy={14.5} r={1.5} />,
    <path
      className="cloud-image_svg__a"
      d="M18 20.25l-2.391-3.587a.75.75 0 00-1.239-.014L12.375 19.5l-1.236-.989a.751.751 0 00-1.093.17L7.5 22.5"
    />
  );

export default SvgCloudImage;
