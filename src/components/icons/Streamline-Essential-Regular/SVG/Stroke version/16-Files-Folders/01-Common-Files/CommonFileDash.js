import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileDash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-dash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-dash_svg__a"
      d="M2.625 4.067V2.625a1.442 1.442 0 011.442-1.442H5.51M2.625 19.933v1.442a1.442 1.442 0 001.442 1.442H5.51M21.375 19.933v1.442a1.442 1.442 0 01-1.442 1.442H18.49M13.442 22.817h2.164M8.394 22.817h2.164M13.442 1.183h2.164M8.394 1.183h2.164M2.625 9.837V7.673M2.625 16.327v-2.164M21.375 9.837V7.673M21.375 16.327v-2.164M18.49 3.346l1.443 1.442"
    />
  );

export default SvgCommonFileDash;
