import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionDataTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-data-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-data-transfer_svg__a"
      d="M14.625 12v8.518a2.732 2.732 0 01-2.733 2.732H5.358a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 015.358 2.25h4.017M2.625 18.75h12"
    />,
    <path
      className="phone-action-data-transfer_svg__a"
      d="M9.375 6.75l3 3 3-3M12.375 9.75v-9M15.375 3.75l3-3 3 3M18.375.75v9"
    />
  );

export default SvgPhoneActionDataTransfer;
