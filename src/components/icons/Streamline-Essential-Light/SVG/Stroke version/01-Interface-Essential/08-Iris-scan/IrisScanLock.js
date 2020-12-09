import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="iris-scan-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="iris-scan-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="iris-scan-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />,
    <circle className="iris-scan-lock_svg__a" cx={12} cy={7} r={3.5} />,
    <path
      className="iris-scan-lock_svg__a"
      d="M12 5.5A1.5 1.5 0 1110.5 7M20.744 9.851a23.008 23.008 0 002.632-2.523.5.5 0 000-.656C22.213 5.352 17.562.5 12 .5S1.787 5.352.624 6.672a.5.5 0 000 .656C1.787 8.648 6.438 13.5 12 13.5a10.348 10.348 0 002.578-.336"
    />
  );

export default SvgIrisScanLock;
