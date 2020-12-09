import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedRibbon2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-ribbon-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="certified-ribbon-2_svg__a"
      d="M19.059 23.105l-6.177-4.492a1.5 1.5 0 00-1.764 0l-6.177 4.492A.75.75 0 013.75 22.5V2.25a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V22.5a.75.75 0 01-1.191.605z"
    />,
    <path
      className="certified-ribbon-2_svg__a"
      d="M16.5 7.811l-5.47 5.469a.749.749 0 01-1.06 0l-1.72-1.719"
    />
  );

export default SvgCertifiedRibbon2;
