import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-flag_svg__cls-1"
      d="M14.5 19.119V23.5M14.5 19.119l1.147-.382a3.763 3.763 0 013.311.354 3.688 3.688 0 003.252.458l.948-.316a.5.5 0 00.342-.474v-5.946a.5.5 0 00-.658-.475l-.489.164a3.766 3.766 0 01-3.311-.355 3.688 3.688 0 00-3.252-.458l-1.29.43zM2.547 4.577A4.637 4.637 0 006 2.974a4.637 4.637 0 003.453 1.6"
    />,
    <circle
      className="single-woman-actions-flag_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-actions-flag_svg__cls-1"
      d="M6 9a3.8 3.8 0 013.7 2.918l1.8 6.582H8.543l-1.054 5h-3l-1.054-5H.5l1.805-6.582A3.8 3.8 0 016 9z"
    />
  );

export default SvgSingleWomanActionsFlag;
