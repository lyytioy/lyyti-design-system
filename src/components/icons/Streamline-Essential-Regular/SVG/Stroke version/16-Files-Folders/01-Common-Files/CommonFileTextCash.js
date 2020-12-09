import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-cash_svg__a"
      d="M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle
      className="common-file-text-cash_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="common-file-text-cash_svg__a"
      d="M3.75 6.75h10.5M3.75 11.25h6M3.75 15.75H7.5M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgCommonFileTextCash;
