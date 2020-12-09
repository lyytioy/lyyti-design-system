import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-remove_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-remove_svg__a"
      d="M19.5 15L15 19.5M15 15l4.5 4.5M10.489 23.15A11.251 11.251 0 1123.15 10.5"
    />,
    <path
      className="network-remove_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H10.5M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a17.009 17.009 0 012.307 7.159"
    />
  );

export default SvgNetworkRemove;
