import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWenchDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wench-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wench-double_svg__a"
      d="M23.146 2.855L21 5h-2V3L21.146.855a4 4 0 00-5.292 5.293l-9.708 9.707a4 4 0 00-5.292 5.293L3 19h2v2l-2.146 2.148a4 4 0 005.292-5.293l9.708-9.707a4 4 0 005.292-5.293z"
    />,
    <path
      className="wench-double_svg__a"
      d="M12 10L8.146 6.148A4 4 0 002.854.855L5 3v2H3L.854 2.855a4 4 0 005.292 5.293L10 12M12 14l3.854 3.854a4 4 0 005.292 5.293L19 21v-2h2l2.146 2.147a4 4 0 00-5.292-5.293L14 12"
    />
  );

export default SvgWenchDouble;
