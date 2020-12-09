import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9 10c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h5c.552 0 1 .449 1 1v3c0 .551-.448 1-1 1H9zm0-1h5V6H9v3z" />,
    <path d="M4.5 23c-.827 0-1.5-.673-1.5-1.5V20h-.5a.5.5 0 010-1H3v-4h-.5a.5.5 0 010-1H3v-4h-.5a.5.5 0 010-1H3V5h-.5a.5.5 0 010-1H3V2.5C3 1.673 3.673 1 4.5 1h13c.827 0 1.5.673 1.5 1.5V3h1.5c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5H19v1.5c0 .827-.673 1.5-1.5 1.5h-13zM4 21.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5V4h1.5a.5.5 0 010 1H4v4h1.5a.5.5 0 010 1H4v4h1.5a.5.5 0 010 1H4v4h1.5a.5.5 0 010 1H4v1.5zM20.5 19a.5.5 0 00.5-.5V16h-2v3h1.5zm.5-4v-3h-2l2 3zm0-4V8h-2v3h2zm0-4V4.5a.5.5 0 00-.5-.5H19v3h2z" />
  );

export default SvgNotesBook;
