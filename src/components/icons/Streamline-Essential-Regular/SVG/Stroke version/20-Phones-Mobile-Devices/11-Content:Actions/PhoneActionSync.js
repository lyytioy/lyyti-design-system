import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-sync_svg__a"
      d="M12.75 15v5.518a2.732 2.732 0 01-2.733 2.732H3.483A2.732 2.732 0 01.75 20.518V4.983A2.733 2.733 0 013.483 2.25H9M.75 18.75h12"
    />,
    <path
      className="phone-action-sync_svg__a"
      d="M15 8.25h-3.75V12M22.667 8.983a5.572 5.572 0 01-10.74-.733M19.5 5.25h3.75V1.5M11.833 4.517a5.572 5.572 0 0110.74.733"
    />
  );

export default SvgPhoneActionSync;
