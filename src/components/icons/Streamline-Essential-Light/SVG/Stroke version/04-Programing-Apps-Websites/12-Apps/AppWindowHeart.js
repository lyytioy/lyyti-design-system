import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-heart_svg__a"
      d="M17.5 23.505l-5.112-5.335a3.027 3.027 0 01-.567-3.493 3.025 3.025 0 014.845-.786l.835.835.836-.835a3.025 3.025 0 014.845.786 3.027 3.027 0 01-.567 3.493zM.5 4.504h20M3.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-heart_svg__a"
      d="M9.5 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v8"
    />
  );

export default SvgAppWindowHeart;
