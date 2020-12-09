import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="android-settings_svg__a"
      d="M10.912 2.504l-1.875-2M13.1 2.504l1.875-2M17.833 7.5a.5.5 0 00.472-.666 6.541 6.541 0 00-6.3-4.334 6.537 6.537 0 00-6.314 4.34.5.5 0 00.473.664z"
    />,
    <path
      className="android-settings_svg__a"
      d="M10.25 5a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.75 5a.25.25 0 11-.25.25.25.25 0 01.25-.25M2.5 19.5V11A1.326 1.326 0 014 9.5h1.5M21.5 19.5V11A1.326 1.326 0 0020 9.5h-1.5M5.5 18.003V9.504h13v8.499"
    />,
    <circle className="android-settings_svg__a" cx={12} cy={17.878} r={1.25} />,
    <path
      className="android-settings_svg__a"
      d="M13.062 13.043l.368 1.21a.829.829 0 00.978.568l1.227-.285a1.116 1.116 0 011.065 1.849l-.858.926a.834.834 0 000 1.135l.858.926a1.115 1.115 0 01-1.062 1.848l-1.227-.284a.829.829 0 00-.978.568l-.368 1.21a1.109 1.109 0 01-2.124 0L10.57 21.5a.828.828 0 00-.978-.568l-1.227.284A1.115 1.115 0 017.3 19.372l.859-.926a.836.836 0 000-1.135l-.859-.926a1.116 1.116 0 011.062-1.849l1.227.285a.828.828 0 00.978-.568l.368-1.21a1.109 1.109 0 012.127 0z"
    />
  );

export default SvgAndroidSettings;
