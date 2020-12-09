import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-flag_svg__cls-1"
      d="M15.5 19.849V23.5M15.5 19.849l1.075-.358a2.931 2.931 0 012.628.326 4.2 4.2 0 003.222.39l1.075-.358V14.71a.5.5 0 00-.658-.475l-.417.139a4.355 4.355 0 01-3.249-.406 3.069 3.069 0 00-2.6-.31l-1.075.358zM.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-flag_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-flag_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-flag_svg__cls-1"
      d="M20.476 11.5A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsFlag;
