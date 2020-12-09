import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-upload_svg__a"
      d="M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5L3.711 11a1 1 0 01.863-.5H7.5M16.5 10.5h2.926a1 1 0 01.863.5l3.211 5.5M12 .5v11M8 4.5l4-4 4 4"
    />
  );

export default SvgDrawerUpload;
