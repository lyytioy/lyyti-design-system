import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="common-file-download_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="common-file-download_svg__a"
      d="M17.25 14.25v6M17.25 20.25L19.5 18M17.25 20.25L15 18M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgCommonFileDownload;
