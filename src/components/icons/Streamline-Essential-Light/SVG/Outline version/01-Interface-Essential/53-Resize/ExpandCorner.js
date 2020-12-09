import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandCorner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 23.999a.492.492 0 01-.355-.148L.146 18.852a.5.5 0 01.708-.707L5 22.292V5.499a.5.5 0 01.5-.5h16.793L18.147.853a.5.5 0 11.707-.708l5 5a.505.505 0 010 .708l-4.999 4.999a.5.5 0 11-.709-.707l4.146-4.146H6v16.293l4.146-4.146a.5.5 0 11.708.707l-5 5a.507.507 0 01-.354.146z" />
  );

export default SvgExpandCorner;
