import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftElectronic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-electronic_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gift-electronic_svg__a"
      d="M13.5 15.75v4.767a2.732 2.732 0 01-2.733 2.733H4.233A2.732 2.732 0 011.5 20.517V4.983A2.732 2.732 0 014.233 2.25H9.75M1.5 18.75h12"
    />,
    <rect
      className="gift-electronic_svg__a"
      x={13.5}
      y={3.75}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="gift-electronic_svg__a"
      d="M18 3.75l-3-3M21 .75l-3 3M18 3.75v9M22.5 8.25h-9M10.5 6.75h-6M10.5 9.75H6.75"
    />
  );

export default SvgGiftElectronic;
