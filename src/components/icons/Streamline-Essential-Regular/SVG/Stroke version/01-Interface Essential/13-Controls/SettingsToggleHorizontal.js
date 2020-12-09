import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsToggleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-toggle-horizontal_svg__a,.settings-toggle-horizontal_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.settings-toggle-horizontal_svg__a{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="settings-toggle-horizontal_svg__a"
      d="M18.376 10.5H5.626A4.888 4.888 0 01.751 5.625 4.889 4.889 0 015.626.75h12.75a4.89 4.89 0 014.875 4.875 4.889 4.889 0 01-4.875 4.875zM18.376 23.25H5.626a4.888 4.888 0 01-4.875-4.875A4.889 4.889 0 015.626 13.5h12.75a4.89 4.89 0 014.875 4.875 4.889 4.889 0 01-4.875 4.875z"
    />,
    <circle
      className="settings-toggle-horizontal_svg__b"
      cx={5.626}
      cy={5.625}
      r={1.875}
    />,
    <circle
      className="settings-toggle-horizontal_svg__b"
      cx={18.376}
      cy={18.375}
      r={1.875}
    />
  );

export default SvgSettingsToggleHorizontal;
