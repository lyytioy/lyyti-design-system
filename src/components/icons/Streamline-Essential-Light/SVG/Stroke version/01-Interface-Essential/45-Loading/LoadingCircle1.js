import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="loading-circle-1_svg__a"
      d="M16.5 22.038A11 11 0 1112 1M18.684 3.262a10.909 10.909 0 011.371 1.245M21.75 6.905q.215.411.394.839t.322.869M22.989 11.5q.021.463 0 .927c-.013.308-.038.617-.076.923M22.169 16.193q-.177.429-.39.841t-.458.806M15.286 1.5q.481.15.943.343M19.725 19.829c-.237.234-.485.458-.743.669M12 4a8 8 0 11-8 8"
    />
  );

export default SvgLoadingCircle1;
