import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-close_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="focus-close_svg__a" cx={9} cy={13.5} r={6} />,
    <path
      className="focus-close_svg__a"
      d="M20.769 9.68a4.992 4.992 0 01-.876 2.256M17.593 13.685a7.188 7.188 0 01-2.613.3M11.094 7.876a7.409 7.409 0 011-1.825M13.992 4.6a4.856 4.856 0 012.39-.372M19.049 5.344a5.008 5.008 0 011.416 1.964M.75 3.685V1.728A.981.981 0 011.728.75h1.957M23.25 3.685V1.728a.981.981 0 00-.978-.978h-1.957M.75 20.25v2a.992.992 0 00.978 1h1.957M23.25 20.25v2a.992.992 0 01-.978 1h-1.957"
    />
  );

export default SvgFocusClose;
