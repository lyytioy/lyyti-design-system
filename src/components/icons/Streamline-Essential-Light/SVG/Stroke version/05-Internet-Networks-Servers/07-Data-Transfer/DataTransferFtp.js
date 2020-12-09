import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferFtp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-ftp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-ftp_svg__a"
      d="M11.5 5V1M14 3.5L11.5 1 9 3.5"
    />,
    <rect
      className="data-transfer-ftp_svg__a"
      x={2.5}
      y={7}
      width={19}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="data-transfer-ftp_svg__a"
      d="M5.5 12.062h2M5.5 15v-5a1 1 0 011-1h2M5.5 12h2M10.5 9h3M12 9v6M18.5 10.5A1.5 1.5 0 0117 12h-1.5V9H17a1.5 1.5 0 011.5 1.5zM15.5 15v-3M11.5 19v4M14 20.5L11.5 23 9 20.5"
    />
  );

export default SvgDataTransferFtp;
