import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCalendar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6 6a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5A.5.5 0 016 6z" />,
    <path d="M2 24c-.827 0-1.5-.673-1.5-1.5v-19C.5 2.673 1.173 2 2 2h1.969a.5.5 0 010 1H2a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-19A.5.5 0 0022 3h-2a.5.5 0 010-1h2c.827 0 1.5.673 1.5 1.5v19c0 .827-.673 1.5-1.5 1.5H2z" />,
    <path d="M4.5 21c-.551 0-1-.448-1-1V7.5a.5.5 0 011 0V20h15V7.5a.5.5 0 011 0V20a1 1 0 01-1 1h-15zM12 6a.5.5 0 01-.5-.5V3H7.969a.5.5 0 010-1H11.5V.5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM18 6a.5.5 0 01-.5-.5V3H14a.5.5 0 010-1h3.5V.5a.5.5 0 011 0v5a.5.5 0 01-.5.5z" />
  );

export default SvgNotesCalendar;
