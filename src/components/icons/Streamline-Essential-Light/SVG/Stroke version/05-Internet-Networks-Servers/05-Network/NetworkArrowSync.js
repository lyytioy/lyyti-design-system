import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkArrowSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-arrow-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="network-arrow-sync_svg__a"
      cx={11.996}
      cy={12.001}
      r={6.5}
    />,
    <path
      className="network-arrow-sync_svg__a"
      d="M16.8 7.623a3.227 3.227 0 01-1.412 2.117c-2.621-.655-1.63.828-1.413 1.7.283.283.848 0 .848 0 1.264 2.488-.848 3.109-.848 3.109-1.538 1.538-1.037 1.978-2.543 1.978-.283 0-.849-1.13-.849-1.413 0-2.153-1.079-2.543-1.978-2.543-.848 0-.848-1.131-.848-1.131s0-1.979 1.412-2.261 1.413.282 1.413.282c.584.584 2.655-.561.763-2.033-.7-.545 2.552-1.641 2.552-1.641M21.459 3.844l-3.919-.771.304 3.376M2.008 19.996l4.465.933-.359-3.366M17.529 3.073a10.5 10.5 0 01-7.767 19.188M6.473 20.929a10.5 10.5 0 017.746-19.193"
    />
  );

export default SvgNetworkArrowSync;
