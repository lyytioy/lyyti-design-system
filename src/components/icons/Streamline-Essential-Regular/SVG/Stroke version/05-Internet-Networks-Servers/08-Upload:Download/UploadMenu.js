import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-menu_svg__a"
      d="M15.75 17.25L12 13.5l-3.75 3.75M12 23.25V13.5M23.25.75H.75M23.25 5.25H.75M23.25 9.75H.75"
    />
  );

export default SvgUploadMenu;
