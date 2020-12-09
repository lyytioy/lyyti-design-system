import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRouterSignalDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".router-signal-double_svg__a,.router-signal-double_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.router-signal-double_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="router-signal-double_svg__a"
      d="M4.125 21.75v1.5M19.875 21.75v1.5M9.75 15v6.75M14.25 18a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.75 18a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.75 15V6.75"
    />,
    <path
      className="router-signal-double_svg__b"
      d="M16.629 4.629a3 3 0 014.242 0"
    />,
    <path
      className="router-signal-double_svg__a"
      d="M19.875 21.75a3.375 3.375 0 000-6.75H4.125a3.375 3.375 0 000 6.75z"
    />,
    <path
      className="router-signal-double_svg__b"
      d="M23.25 2.782a6 6 0 00-9 0"
    />,
    <path className="router-signal-double_svg__a" d="M5.25 15V6.75" />,
    <path
      className="router-signal-double_svg__b"
      d="M7.371 4.629a3 3 0 00-4.242 0M.75 2.782a6 6 0 019 0"
    />
  );

export default SvgRouterSignalDouble;
