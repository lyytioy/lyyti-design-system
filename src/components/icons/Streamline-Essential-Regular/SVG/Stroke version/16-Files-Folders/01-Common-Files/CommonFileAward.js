import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileAward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-award_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-award_svg__a"
      d="M14.96 17.22l-.633 5.241a.666.666 0 001.127.591l1.823-1.822 1.823 1.822a.667.667 0 001.128-.591l-.641-5.277"
    />,
    <circle
      className="common-file-award_svg__a"
      cx={17.25}
      cy={14.25}
      r={3.75}
    />,
    <path
      className="common-file-award_svg__a"
      d="M10.5 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 014.5.75h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgCommonFileAward;
