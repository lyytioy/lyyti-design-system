import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderHold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-hold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-hold_svg__a"
      d="M11.72 18.5v5M6.72 23.5h10M4.72 23.5h-1M1.72 23.5h-1M22.72 23.5h-1M19.72 23.5h-1M23.261 7.7a1 1 0 00-.982-1.2H10.42a1 1 0 01-.981-.8l-.278-1.4a1 1 0 00-.981-.8H1.72a1 1 0 00-.981 1.2l2.6 13a1 1 0 00.981.8h15.96a1 1 0 00.981-.8c.412-2.066 1.512-7.563 2-10zM3.72 1.5a1 1 0 011-1h15a1 1 0 011 1v3"
    />
  );

export default SvgFolderHold;
