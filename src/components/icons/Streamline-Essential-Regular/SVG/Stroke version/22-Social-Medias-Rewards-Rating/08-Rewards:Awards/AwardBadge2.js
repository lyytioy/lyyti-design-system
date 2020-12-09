import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadge2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-badge-2_svg__a"
      d="M23.25 20.188a3.062 3.062 0 00-1.62-2.7L13.412 13.1a3 3 0 00-2.824 0L2.51 17.412A3.224 3.224 0 00.782 19.74a3.063 3.063 0 003.029 3.509h16.378a3.061 3.061 0 003.061-3.061zM.75 12.353L10.588 7.1a3 3 0 012.824 0l9.838 5.249M.75 6.353L10.588 1.1a3 3 0 012.824 0l9.838 5.253"
    />
  );

export default SvgAwardBadge2;
