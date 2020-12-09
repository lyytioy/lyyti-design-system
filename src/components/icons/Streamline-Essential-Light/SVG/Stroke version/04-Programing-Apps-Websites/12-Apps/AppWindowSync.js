import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-sync_svg__a"
      d="M.518 4.504h20M3.518 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25M5.518 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25M7.518 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25"
    />,
    <path
      className="app-window-sync_svg__a"
      d="M9.518 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2V10M15.018 18.505h-3.5v3.5M22.935 19.738a5.571 5.571 0 01-10.813-1.233M20.018 16.505h3.5v-3.5M12.1 15.271a5.572 5.572 0 0110.814 1.234"
    />
  );

export default SvgAppWindowSync;
