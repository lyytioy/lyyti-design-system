import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="database-download_svg__a"
      d="M19.5 4.525c0 2.206-4.254 4-9.5 4s-9.5-1.794-9.5-4S4.754.5 10 .5s9.5 1.815 9.5 4.025zM10 12.525c-5.246 0-9.5-1.794-9.5-4M8.5 16.975c-4.533-.3-8-1.958-8-3.949"
    />,
    <path
      className="database-download_svg__a"
      d="M9 21.492c-4.776-.211-8.5-1.9-8.5-3.967V4.5M19.5 4.501v4.5"
    />,
    <circle className="database-download_svg__a" cx={17.5} cy={17.501} r={6} />,
    <path
      className="database-download_svg__a"
      d="M17.5 14.501v6M17.5 20.501l-2.25-2.25M17.5 20.501l2.25-2.25"
    />
  );

export default SvgDatabaseDownload;
