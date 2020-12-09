import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsAdd1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-add-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-add-1_svg__a"
      d="M.818 11.471L1.9 12.554a3 3 0 004.243 0l1.591-1.591a1.5 1.5 0 000-2.122L4.64 5.747a1.5 1.5 0 00-2.263.153C-.864 10.3 1.1 14.934 5.083 18.918s8.62 5.946 13.022 2.705a1.5 1.5 0 00.148-2.263l-3.094-3.094a1.5 1.5 0 00-2.121 0l-1.592 1.591a3 3 0 000 4.243l1.1 1.094"
    />,
    <circle className="phone-actions-add-1_svg__a" cx={18} cy={6} r={5.25} />,
    <path className="phone-actions-add-1_svg__a" d="M18 3.75v4.5M15.75 6h4.5" />
  );

export default SvgPhoneActionsAdd1;
