import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-image_svg__a"
      d="M7 12.5l1.95-3.151a1 1 0 011.274-.206L12 10.5l1.662-2.14a1 1 0 011.588.067L17 12.5z"
    />,
    <circle className="drawer-image_svg__a" cx={9} cy={5} r={1.5} />,
    <path
      className="drawer-image_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6"
    />
  );

export default SvgDrawerImage;
