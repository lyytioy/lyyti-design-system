import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={22}
      cy={21}
      r={1.5}
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={15}
      cy={22}
      r={1.5}
    />,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M16.5 22v-5.745a1 1 0 01.725-.962l5-1.429a1 1 0 011.275.962V21M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={14}
      cy={4.5}
      r={3}
      id="multiple-actions-music_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M18.7 12.485a5 5 0 00-7.262-2.819"
    />
  );

export default SvgMultipleActionsMusic;
