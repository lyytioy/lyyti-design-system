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
    <g id="single-neutral-actions-flag_svg___Group_" data-name="&lt;Group&gt;">
      <path
        className="single-neutral-actions-flag_svg__cls-1"
        d="M14.5 19.119V23.5M14.5 19.119l1.147-.382a3.763 3.763 0 013.311.354 3.688 3.688 0 003.252.458l.948-.316a.5.5 0 00.342-.474v-5.946a.5.5 0 00-.658-.475l-.489.164a3.766 3.766 0 01-3.311-.355 3.688 3.688 0 00-3.252-.458l-1.29.43z"
      />
    </g>,
    <circle
      className="single-neutral-actions-flag_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-flag_svg__cls-1"
      d="M11.5 11.755A7 7 0 00.5 17.5h11"
    />
  );

export default SvgSingleNeutralActionsFlag;
