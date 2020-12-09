import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-lock_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />,
    <rect
      className="shield-lock_svg__a"
      x={7.5}
      y={9.243}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="shield-lock_svg__a" cx={12} cy={13.306} r={1.25} />,
    <path
      className="shield-lock_svg__a"
      d="M14.5 7.743a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgShieldLock;
