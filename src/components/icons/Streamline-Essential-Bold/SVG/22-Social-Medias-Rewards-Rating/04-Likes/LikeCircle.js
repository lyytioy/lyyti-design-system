import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm6.949 11.213v.007l-1.125 3.755v.009c-.457 1.476-1.239 2.482-2.792 2.482-3.706 0-3.495.427-7.824-1.761-.19-.1-.378-.191-.567-.288a.252.252 0 01-.136-.223v-4.587a.25.25 0 01.25-.25h1.901a1.181 1.181 0 00.964-.5l2.88-4.431a1.014 1.014 0 011.611-.054 1 1 0 01.192.888l-.52 1.963a1.169 1.169 0 00.206 1.016 1.183 1.183 0 00.934.457h2.897a1.176 1.176 0 011.129 1.517z" />
  );

export default SvgLikeCircle;
