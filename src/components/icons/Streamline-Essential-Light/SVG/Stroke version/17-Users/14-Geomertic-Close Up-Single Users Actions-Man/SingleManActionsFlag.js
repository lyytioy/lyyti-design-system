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
      d="M14.5 19.119V23.5M14.5 19.119l1.147-.382a3.763 3.763 0 013.311.354 3.688 3.688 0 003.252.458l.948-.316a.5.5 0 00.342-.474v-5.946a.5.5 0 00-.658-.475l-.489.164a3.766 3.766 0 01-3.311-.355 3.688 3.688 0 00-3.252-.458l-1.29.43zM11.5 11.755A7 7 0 00.5 17.5h11M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-flag_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsFlag;
