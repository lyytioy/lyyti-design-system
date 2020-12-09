import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-flag_svg__cls-1"
      d="M14.5 19.119V23.5M14.5 19.119l1.147-.382a3.763 3.763 0 013.311.354 3.688 3.688 0 003.252.458l.948-.316a.5.5 0 00.342-.474v-5.946a.5.5 0 00-.658-.475l-.489.164a3.766 3.766 0 01-3.311-.355 3.688 3.688 0 00-3.252-.458l-1.29.43zM12.5 16.5H.5a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.413.638.236 1.244.455 1.8.667"
    />
  );

export default SvgSingleNeutralActionsFlag;
