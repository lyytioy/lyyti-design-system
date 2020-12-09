import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesDiary = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4 24c-.827 0-1.5-.673-1.5-1.5v-21C2.5.673 3.173 0 4 0h16c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5H4zm16-1a.5.5 0 00.5-.5v-21A.5.5 0 0020 1H6.5v22H20zM4 1a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h1.5V1H4z" />,
    <path d="M11.5 10c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h5c.552 0 1 .449 1 1v3c0 .551-.448 1-1 1h-5zm0-1h5V6h-5v3z" />
  );

export default SvgNotesDiary;
