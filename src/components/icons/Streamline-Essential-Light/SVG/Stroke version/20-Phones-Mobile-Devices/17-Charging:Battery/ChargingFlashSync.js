import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlashSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash-sync_svg__a"
      d="M12.5 6l-4 7.5h3V18l4-7.5h-3V6zM23.157 14.665l-2.786-4.151-3.206 3.838"
    />,
    <path
      className="charging-flash-sync_svg__a"
      d="M5.99 18.01A8.5 8.5 0 0020.5 12a8.564 8.564 0 00-.129-1.486M.843 9.335l2.786 4.151 3.206-3.838"
    />,
    <path
      className="charging-flash-sync_svg__a"
      d="M18.01 5.99A8.5 8.5 0 003.5 12a8.564 8.564 0 00.129 1.486"
    />
  );

export default SvgChargingFlashSync;
