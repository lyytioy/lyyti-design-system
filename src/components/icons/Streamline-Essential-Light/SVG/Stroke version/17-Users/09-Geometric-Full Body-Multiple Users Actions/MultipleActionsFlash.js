import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M17 19.5h1.5v3.64a.125.125 0 00.223.078l4.657-5.893A.5.5 0 0023 16.5h-1.5v-3.64a.125.125 0 00-.223-.078l-4.657 5.893a.5.5 0 00.38.825zM8 23.5l.5-6H11V14a5 5 0 00-10 0v3.5h2.5l.5 6z"
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={5.499}
      cy={4}
      r={3.5}
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={13.999}
      cy={4.5}
      r={3}
      id="multiple-actions-flash_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M18.7 12.485a5 5 0 00-7.262-2.819"
    />
  );

export default SvgMultipleActionsFlash;
