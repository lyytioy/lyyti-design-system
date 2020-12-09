import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-flag_svg__cls-1"
      d="M14.5 19.119V23.5M14.5 19.119l1.147-.382a3.763 3.763 0 013.311.354 3.688 3.688 0 003.252.458l.948-.316a.5.5 0 00.342-.474v-5.946a.5.5 0 00-.658-.475l-.489.164a3.766 3.766 0 01-3.311-.355 3.688 3.688 0 00-3.252-.458l-1.29.43zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-flag_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-flag_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />
  );

export default SvgSingleManActionsFlag;
