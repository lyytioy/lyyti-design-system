import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="certified-ribbon_svg__a"
      d="M4.807 13.042L.75 18l3.75.75 1.5 4.5 3.944-6.258M19.193 13.042L23.25 18l-3.75.75-1.5 4.5-3.944-6.258M20.25 9a8.246 8.246 0 11-4.5-7.35"
    />,
    <path
      className="certified-ribbon_svg__a"
      d="M18 5.25l-5.47 5.47a.749.749 0 01-1.06 0L9.75 9"
    />
  );

export default SvgCertifiedRibbon;
