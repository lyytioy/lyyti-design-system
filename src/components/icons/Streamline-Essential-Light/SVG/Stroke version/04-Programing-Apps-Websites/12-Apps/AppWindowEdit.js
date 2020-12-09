import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-edit_svg__a"
      d="M.517 4.504h20M3.517 2.256a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.517 2.256a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.517 2.256a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-edit_svg__a"
      d="M9.517 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v7M15.718 22.305l-4.2 1.2 1.2-4.2 7.182-7.179a2.121 2.121 0 013 3zM18.997 13.026l3 3M12.718 19.305l3 3"
    />
  );

export default SvgAppWindowEdit;
