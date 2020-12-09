import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-phone_svg__a"
      d="M12 15.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="shield-phone_svg__a"
      x={7.5}
      y={5}
      width={9}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="shield-phone_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />
  );

export default SvgShieldPhone;
