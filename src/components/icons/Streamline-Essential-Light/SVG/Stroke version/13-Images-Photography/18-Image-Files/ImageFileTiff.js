import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileTiff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-tiff_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-tiff_svg__a"
      d="M20.5 9.5V6.475A5.975 5.975 0 0014.525.5H2.5a1 1 0 00-1 1v21a1 1 0 001 1h17a1 1 0 001-1v-1"
    />,
    <path
      className="image-file-tiff_svg__a"
      d="M15.5.58V4.5a1 1 0 001 1h3.92M4.5 12.5h4M6.5 12.5v6M11.5 12.5v6M10.5 18.5h2M10.5 12.5h2M14.5 18.5v-5a1 1 0 011-1h2M14.5 15.5h2M19.5 18.5v-5a1 1 0 011-1h2M19.5 15.5h2"
    />
  );

export default SvgImageFileTiff;
