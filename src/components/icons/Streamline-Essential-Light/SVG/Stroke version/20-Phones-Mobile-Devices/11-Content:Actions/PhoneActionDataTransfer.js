import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionDataTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-data-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-data-transfer_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-action-data-transfer_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-data-transfer_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M7.5 12.5l2 2 2-2M9.5 14.5v-6M12.5 10.5l2-2 2 2M14.5 8.5v6"
    />
  );

export default SvgPhoneActionDataTransfer;
