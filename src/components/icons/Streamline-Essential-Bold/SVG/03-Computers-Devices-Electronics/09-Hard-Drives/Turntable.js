import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTurntable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21 2.5A2.5 2.5 0 0018.5 0h-13A2.5 2.5 0 003 2.5v19A2.5 2.5 0 005.5 24h13a2.5 2.5 0 002.5-2.5zM18 22a1 1 0 111-1 1 1 0 01-1 1zm-6.7-1.818a.5.5 0 01.2.4V21a.5.5 0 01-.5.5H6.833A1.335 1.335 0 015.5 20.168v-1.6a.249.249 0 01.073-.177l4.457-4.447a.75.75 0 00-1.06-1.061l-1.451 1.456a.25.25 0 01-.364-.011 6.542 6.542 0 112.839 1.85.249.249 0 00-.254.061L8.358 17.62a.249.249 0 00.027.38z" />,
    <circle cx={12} cy={10.001} r={2} />
  );

export default SvgTurntable;
