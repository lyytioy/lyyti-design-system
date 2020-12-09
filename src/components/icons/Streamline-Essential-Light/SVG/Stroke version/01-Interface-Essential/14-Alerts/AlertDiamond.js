import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-diamond_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="alert-diamond_svg__a"
      x={4.199}
      y={4.307}
      width={15.556}
      height={15.556}
      rx={1}
      ry={1}
      transform="rotate(-45 11.976 12.085)"
    />,
    <path
      className="alert-diamond_svg__a"
      d="M12 14.11v-7M11.987 16.11a.245.245 0 00-.237.255.254.254 0 00.25.245h.009a.246.246 0 00.237-.255.253.253 0 00-.246-.245M12 16.11h-.009"
    />
  );

export default SvgAlertDiamond;
