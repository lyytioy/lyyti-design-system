import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-idea_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-neutral-idea_svg__New_Symbol_38" data-name="New Symbol 38">
      <path
        className="single-neutral-idea_svg__cls-1"
        d="M23.5 5.5a5 5 0 10-7 4.578V11.5a1 1 0 001 1h2a1 1 0 001-1v-1.422a5 5 0 003-4.578zM16.5 10h4M18.5 12.5V14"
      />
    </g>,
    <path
      className="single-neutral-idea_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-idea_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralIdea;
