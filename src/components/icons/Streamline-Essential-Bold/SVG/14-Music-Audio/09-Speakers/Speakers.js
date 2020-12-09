import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19.5-.014L4.5.014a1.5 1.5 0 00-1.5 1.5v21a1.5 1.5 0 001.5 1.5l15-.028a1.5 1.5 0 001.5-1.5v-21a1.5 1.5 0 00-1.5-1.5zm-7.51 9.493a6.01 6.01 0 11-6.01 6.009 6.01 6.01 0 016.01-6.009zM9.5 5a2.49 2.49 0 112.49 2.49A2.49 2.49 0 019.5 5z" />,
    <circle cx={12} cy={15.491} r={2} />
  );

export default SvgSpeakers;
