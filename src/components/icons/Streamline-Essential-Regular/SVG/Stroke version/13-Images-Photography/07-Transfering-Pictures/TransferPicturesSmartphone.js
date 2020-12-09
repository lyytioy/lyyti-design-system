import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTransferPicturesSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".transfer-pictures-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="transfer-pictures-smartphone_svg__a"
      d="M5.25 6.75L3 9V6.75a3 3 0 013-3h2.25M.75 6.75L3 9M4.5 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="transfer-pictures-smartphone_svg__a"
      x={0.75}
      y={11.25}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="transfer-pictures-smartphone_svg__a"
      d="M20.25 2.25L19.5.75H15l-.75 1.5h-1.5a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="transfer-pictures-smartphone_svg__a"
      cx={17.25}
      cy={5.625}
      r={1.875}
    />
  );

export default SvgTransferPicturesSmartphone;
