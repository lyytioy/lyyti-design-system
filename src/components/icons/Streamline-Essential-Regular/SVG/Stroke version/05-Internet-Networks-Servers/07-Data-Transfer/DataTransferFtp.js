import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferFtp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-ftp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="data-transfer-ftp_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="data-transfer-ftp_svg__a"
      d="M4.5 15.75v-6A1.5 1.5 0 016 8.25h1.5M4.5 12.75h2.25M12 15.75v-7.5M10.5 8.25h3M16.5 15.75v-7.5M16.5 8.25h.75a2.25 2.25 0 010 4.5h-.75M9.75 21.75l2.25 1.5 2.25-1.5M14.25 2.25L12 .75l-2.25 1.5"
    />
  );

export default SvgDataTransferFtp;
