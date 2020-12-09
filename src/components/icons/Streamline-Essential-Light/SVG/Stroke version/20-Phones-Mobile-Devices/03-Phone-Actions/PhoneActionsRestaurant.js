import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRestaurant = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-restaurant_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-restaurant_svg__a"
      d="M7.824 10.016a2 2 0 000-2.828L5.7 5.067a2 2 0 00-2.829 0L1.711 6.23A3 3 0 001.332 10a46.5 46.5 0 0013 13 3 3 0 003.774-.379l1.164-1.163a2 2 0 000-2.828l-2.121-2.122a2 2 0 00-2.829 0l-.707.707a47.474 47.474 0 01-6.5-6.5zM18.081 5.667l1.724 1.724c2.3-2.3 3.955-5.816 3.161-6.609L22.8.945l-9.49 9.492M9.936 3.946l1.725 1.724a2.438 2.438 0 003.448-3.448L13.386.5M11.661 2.222l8.228 8.227"
    />
  );

export default SvgPhoneActionsRestaurant;
