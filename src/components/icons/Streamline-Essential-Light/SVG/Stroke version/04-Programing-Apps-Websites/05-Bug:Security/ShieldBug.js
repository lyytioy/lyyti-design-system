import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-bug_svg__a"
      d="M13.081 8.147a.5.5 0 00-.063-.629L12.1 6.6a.5.5 0 00-.708 0l-.982.982-.335-.334A2 2 0 007.25 10.08l.335.335-.985.985a.5.5 0 000 .708l.914.914a.5.5 0 00.629.063 2 2 0 012.772 2.772.5.5 0 00.063.629l.914.914a.5.5 0 00.707 0l.982-.981.335.335a2 2 0 002.828-2.829.474.474 0 010-.669l.656-.656a.5.5 0 000-.708l-.914-.914a.5.5 0 00-.629-.063 2 2 0 01-2.772-2.772z"
    />,
    <path
      className="shield-bug_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />
  );

export default SvgShieldBug;
