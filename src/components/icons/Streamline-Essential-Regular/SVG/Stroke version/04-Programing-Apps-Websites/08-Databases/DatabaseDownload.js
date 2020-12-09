import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-download_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.327-1.435 2.519-3.719 3.343M23.25 9.751v-4.5"
    />,
    <path
      className="database-download_svg__a"
      d="M.75 5.251v6c0 1.958 3.129 3.625 7.5 4.243"
    />,
    <path
      className="database-download_svg__a"
      d="M.75 11.251v6c0 2.068 3.487 3.81 8.237 4.336"
    />,
    <circle
      className="database-download_svg__a"
      cx={17.25}
      cy={17.251}
      r={6}
    />,
    <path
      className="database-download_svg__a"
      d="M17.25 14.251v6M17.25 20.251L15 18.001M17.25 20.251l2.25-2.25"
    />
  );

export default SvgDatabaseDownload;
