import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPensPocket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pens-pocket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pens-pocket_svg__a"
      d="M6 9.5v-7a2 2 0 114 0v7M10 3.501H5.999M16.002 9.501v-4H13v4M16 1.5a2 2 0 012 2V12"
    />,
    <path
      className="content-pens-pocket_svg__a"
      d="M13 .501h3.002v5H13zM11.509 23.432a1.774 1.774 0 00.98 0l7.786-2.224a1 1 0 00.725-.962V10.5a1 1 0 00-1-1H4a1 1 0 00-1 1v9.745a1 1 0 00.725.962z"
    />
  );

export default SvgContentPensPocket;
