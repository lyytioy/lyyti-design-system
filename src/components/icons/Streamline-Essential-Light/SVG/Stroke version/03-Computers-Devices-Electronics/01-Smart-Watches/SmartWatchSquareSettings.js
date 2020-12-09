import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-settings_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-settings_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />,
    <circle
      className="smart-watch-square-settings_svg__a"
      cx={12}
      cy={12}
      r={1.25}
    />,
    <path
      className="smart-watch-square-settings_svg__a"
      d="M13.062 7.164l.368 1.211a.827.827 0 00.978.567l1.227-.284a1.116 1.116 0 011.065 1.849l-.858.925a.836.836 0 000 1.136l.858.925a1.116 1.116 0 01-1.062 1.849l-1.227-.284a.827.827 0 00-.978.567l-.368 1.211a1.109 1.109 0 01-2.124 0l-.368-1.211a.827.827 0 00-.978-.567l-1.227.284A1.116 1.116 0 017.3 13.493l.858-.925a.836.836 0 000-1.136l-.858-.925a1.116 1.116 0 011.065-1.849l1.227.284a.827.827 0 00.978-.567l.368-1.211a1.109 1.109 0 012.124 0z"
    />
  );

export default SvgSmartWatchSquareSettings;
