import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedRibbon2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-ribbon-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="certified-ribbon-2_svg__a"
      d="M20.5 22.7c0 .55-.378.755-.84.457L12 18.2l-7.66 4.96c-.462.3-.84.093-.84-.457V1.7a1 1 0 011-1h15a1 1 0 011 1z"
    />,
    <path
      className="certified-ribbon-2_svg__a"
      d="M17.625 4.987l-6.032 8.2a.793.793 0 01-1.269.068L7 9.623"
    />
  );

export default SvgCertifiedRibbon2;
