import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="user-live_svg__a"
      d="M9.149 23.23v-4.458M12.149 18.772v1.293a5.129 5.129 0 001.125 3.165 5.122 5.122 0 001.126-3.165v-1.293M3.9 18.772v3.533a1.055 1.055 0 001.125.967h1.124M19.316 23.272h-.958a.931.931 0 01-.959-.9v-2.7a.931.931 0 01.959-.9h.958M17.399 21.022h2.25M6.2 11.907a6 6 0 1111.136.022M4.69 14.414a8.664 8.664 0 1114.168 0"
    />,
    <circle className="user-live_svg__a" cx={11.774} cy={9.304} r={2.625} />,
    <path
      className="user-live_svg__a"
      d="M16 15.679a4.474 4.474 0 00-8.449 0z"
    />
  );

export default SvgUserLive;
