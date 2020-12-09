import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExternalDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".external-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="external-download_svg__a"
      d="M12.001 12.5V.5M8.001 8.5l4 4 4-4M23 20.5a3 3 0 01-3 3H4a3 3 0 010-6h16a3 3 0 013 3zM4 20.5h6"
    />,
    <circle className="external-download_svg__a" cx={18} cy={20.5} r={1} />,
    <path
      className="external-download_svg__a"
      d="M5.561 8.5a2 2 0 00-1.94 1.515l-2.268 9.072M22.647 19.088l-2.268-9.073a2 2 0 00-1.94-1.515"
    />
  );

export default SvgExternalDownload;
