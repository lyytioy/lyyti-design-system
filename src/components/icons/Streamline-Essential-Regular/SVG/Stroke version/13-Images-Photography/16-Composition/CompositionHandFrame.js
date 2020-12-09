import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionHandFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-hand-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="composition-hand-frame_svg__a"
      d="M3 2.25h4.793A1.957 1.957 0 019.75 4.207V5.25h5.283a1.5 1.5 0 010 3H6.391l.536 1.981a1.424 1.424 0 01-2.762.691L3 6.585M.75.75h1.5c.414 0 .75.448.75 1v7c0 .552-.336 1-.75 1H.75M21.75 6.75V5.478a.981.981 0 00-.978-.978H19.5M21 21.75h-4.793a1.957 1.957 0 01-1.957-1.957V18.75H8.967a1.5 1.5 0 010-3h8.642l-.536-1.981a1.424 1.424 0 012.762-.691L21 17.7M23.25 23.25h-1.5c-.414 0-.75-.448-.75-1v-7c0-.552.336-1 .75-1h1.5M2.25 15.75v1.272a.981.981 0 00.978.978H4.5"
    />
  );

export default SvgCompositionHandFrame;
