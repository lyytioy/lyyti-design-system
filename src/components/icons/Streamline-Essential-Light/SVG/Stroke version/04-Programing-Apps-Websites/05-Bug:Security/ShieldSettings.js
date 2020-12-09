import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-settings_svg__a"
      d="M2 3.775v7.637A12.285 12.285 0 009.828 22.88l1.067.414a3.063 3.063 0 002.21 0l1.067-.414A12.285 12.285 0 0022 11.412V3.775a1.536 1.536 0 00-.89-1.406A22.143 22.143 0 0012 .5a22.143 22.143 0 00-9.11 1.869A1.536 1.536 0 002 3.775z"
    />,
    <circle className="shield-settings_svg__a" cx={12} cy={11.125} r={1.25} />,
    <path
      className="shield-settings_svg__a"
      d="M13.062 6.289L13.43 7.5a.827.827 0 00.978.567l1.227-.284A1.116 1.116 0 0116.7 9.632l-.858.925a.836.836 0 000 1.136l.858.925a1.116 1.116 0 01-1.062 1.849l-1.227-.284a.827.827 0 00-.978.567l-.368 1.211a1.109 1.109 0 01-2.124 0l-.371-1.211a.827.827 0 00-.978-.567l-1.227.284A1.116 1.116 0 017.3 12.618l.858-.925a.836.836 0 000-1.136L7.3 9.632a1.116 1.116 0 011.065-1.849l1.227.284a.827.827 0 00.978-.567l.368-1.211a1.109 1.109 0 012.124 0z"
    />
  );

export default SvgShieldSettings;
