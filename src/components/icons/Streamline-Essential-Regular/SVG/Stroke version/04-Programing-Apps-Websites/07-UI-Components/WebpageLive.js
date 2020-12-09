import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebpageLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webpage-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="webpage-live_svg__a"
      d="M9.75 5.208V.75M12 .75v1.293a5.12 5.12 0 001.125 3.165 5.12 5.12 0 001.125-3.165V.75M5.25.75v3.533a1.055 1.055 0 001.125.967H7.5M18.417 5.25h-.959a.93.93 0 01-.958-.9v-2.7a.93.93 0 01.958-.9h.959M16.5 3h2.25"
    />,
    <path
      className="webpage-live_svg__a"
      d="M2.25.75a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5"
    />,
    <circle className="webpage-live_svg__a" cx={6} cy={9.75} r={1.5} />,
    <path className="webpage-live_svg__a" d="M10.5 8.25h6M10.5 11.25h3" />,
    <circle className="webpage-live_svg__a" cx={6} cy={15.75} r={1.5} />,
    <path
      className="webpage-live_svg__a"
      d="M10.5 14.25h6M10.5 17.25h3M.75 20.25h22.5M18.75 20.25v3"
    />
  );

export default SvgWebpageLive;
