import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-download_svg__a"
      d="M20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M9.5 17.5H5.623a5.281 5.281 0 01-5.123-4h10"
    />,
    <circle className="laptop-download_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="laptop-download_svg__a"
      d="M17.5 14.5v6M17.5 20.5l-2.25-2.25M17.5 20.5l2.25-2.25"
    />
  );

export default SvgLaptopDownload;
