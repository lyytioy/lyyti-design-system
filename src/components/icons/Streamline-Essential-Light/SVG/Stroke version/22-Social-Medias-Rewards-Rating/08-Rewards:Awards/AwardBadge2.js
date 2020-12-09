import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadge2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-badge-2_svg__a"
      d="M12 22.427c4.591 0 8.332.63 8.5-3.733a.5.5 0 00-.246-.45l-7.817-4.6a.949.949 0 00-.862 0l-7.817 4.6a.5.5 0 00-.246.45c.156 4.363 3.897 3.733 8.488 3.733z"
    />,
    <path
      className="award-badge-2_svg__a"
      d="M20.5 14.892c0 .275-.194.386-.431.246l-7.638-4.492a.943.943 0 00-.862 0l-7.638 4.492c-.237.139-.431.029-.431-.246v-2a.973.973 0 01.431-.754l7.638-4.492a.943.943 0 01.862 0l7.638 4.492a.971.971 0 01.431.754z"
    />,
    <path
      className="award-badge-2_svg__a"
      d="M20.5 8.892c0 .275-.194.386-.431.246l-7.638-4.493a.943.943 0 00-.862 0L3.931 9.138c-.237.139-.431.029-.431-.246v-2a.973.973 0 01.431-.754l7.638-4.493a.943.943 0 01.862 0l7.638 4.493a.971.971 0 01.431.754z"
    />
  );

export default SvgAwardBadge2;
