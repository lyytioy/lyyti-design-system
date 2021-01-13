import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerCheck1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-check-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-check-1_svg__a"
      d="M4.5 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.751 3.75h1.5M14.251 3.75h1.5M4.5 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.751 9.75h1.5M4.501 18.75h3.75v-6M1.126 18a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-check-1_svg__a"
      d="M18.751 3.75a3 3 0 01-3 3h-12a3 3 0 010-6h12a3 3 0 013 3z"
    />,
    <path
      className="server-check-1_svg__a"
      d="M9.73 12.75H3.751a3 3 0 010-6h12a3 3 0 012.6 1.5"
    />,
    <circle className="server-check-1_svg__a" cx={17.251} cy={17.25} r={6} />,
    <path
      className="server-check-1_svg__a"
      d="M19.925 15.506l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5"
    />
  );

export default SvgServerCheck1;