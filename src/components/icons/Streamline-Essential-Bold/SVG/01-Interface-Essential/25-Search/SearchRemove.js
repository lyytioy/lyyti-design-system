import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.707 22.3l-7.682-7.682a9.023 9.023 0 10-1.414 1.414l7.682 7.682a1.013 1.013 0 001.414 0 1 1 0 000-1.414zM2 9a7 7 0 117 7 7.008 7.008 0 01-7-7z" />,
    <path d="M5.818 7.235L7.586 9l-1.768 1.77a1 1 0 001.414 1.415L9 10.417l1.768 1.768a1 1 0 001.414-1.415L10.414 9l1.768-1.768a1 1 0 10-1.414-1.414L9 7.588 7.232 5.821a1 1 0 00-1.414 1.414z" />
  );

export default SvgSearchRemove;
