import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderOpen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-open_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-open_svg__a"
      d="M23.261 10.2a1 1 0 00-.982-1.2H10.42a1 1 0 01-.981-.8l-.278-1.4A1 1 0 008.18 6H1.72a1 1 0 00-.981 1.2l2.6 13a1 1 0 00.981.8h15.96a1 1 0 00.981-.8c.412-2.066 1.512-7.563 2-10zM2.72 4a1 1 0 011-1h17a1 1 0 011 1v3"
    />
  );

export default SvgFolderOpen;
