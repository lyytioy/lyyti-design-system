import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-cash_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.182-1.14 2.258-3 3.061M23.25 9.751v-4.5"
    />,
    <path
      className="database-cash_svg__a"
      d="M.75 5.251v6c0 1.96 3.132 3.627 7.5 4.244"
    />,
    <path
      className="database-cash_svg__a"
      d="M.75 11.251v6c0 2.065 3.479 3.806 8.221 4.335M18.75 14.251h-2.033a1.342 1.342 0 00-.5 2.587l2.064.825a1.342 1.342 0 01-.5 2.588H15.75M17.25 14.251v-.75M17.25 21.001v-.75"
    />,
    <circle className="database-cash_svg__a" cx={17.25} cy={17.251} r={6} />
  );

export default SvgDatabaseCash;
