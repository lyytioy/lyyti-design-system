import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="newspaper-give_svg__a" cx={4.08} cy={5} r={2.5} />,
    <path
      className="newspaper-give_svg__a"
      d="M7.08 21.5v-7l2.767 3.854a1.5 1.5 0 001.977.448l3.5-2a1.5 1.5 0 00-1.488-2.6l-1.49.851a1 1 0 01-1.332-.32l-2.545-3.88A3 3 0 005.961 9.5H1.08M11.08 8.109l2.387 2.771a2.01 2.01 0 00.611.472l3.88 1.951a1.215 1.215 0 001.3-.134l3.2-2.534a1.217 1.217 0 00-.315-2.089L19.2 7.525l-2.855-3.307a1.218 1.218 0 00-1.591-.212L11.321 6.3a1.217 1.217 0 00-.241 1.809zM13.747 11.162l5.455-3.637"
    />
  );

export default SvgNewspaperGive;
