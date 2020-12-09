import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-download_svg__a"
      d="M8.636 17.536L2.2 10.908A5.667 5.667 0 011.113 4.3 5.839 5.839 0 0110.4 2.814L12 4.273l1.6-1.459A5.84 5.84 0 0122.888 4.3 5.659 5.659 0 0123.08 9"
    />,
    <circle className="love-it-download_svg__a" cx={17.5} cy={15.999} r={6} />,
    <path
      className="love-it-download_svg__a"
      d="M17.5 12.999v6M17.5 18.999l-2.25-2.25M17.5 18.999l2.25-2.25"
    />
  );

export default SvgLoveItDownload;
