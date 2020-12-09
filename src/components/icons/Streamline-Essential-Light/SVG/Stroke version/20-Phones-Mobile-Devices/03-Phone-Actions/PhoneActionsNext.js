import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-next_svg__a"
      d="M7.742 9.763a2 2 0 000-2.829L5.62 4.813a2 2 0 00-2.828 0L1.628 5.976a3 3 0 00-.378 3.775 46.509 46.509 0 0013 13 3 3 0 003.775-.379l1.163-1.163a2 2 0 000-2.828l-2.12-2.121a2 2 0 00-2.829 0l-.708.707a47.594 47.594 0 01-6.5-6.5zM18.749.751l4.5 3.5-4.5 3.5"
    />,
    <path
      className="phone-actions-next_svg__a"
      d="M23.249 4.251h-3.5a6 6 0 00-6 6v2"
    />
  );

export default SvgPhoneActionsNext;
