import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24a.75.75 0 01-.75-.75V19.5h-7.5c-.827 0-1.5-.673-1.5-1.5v-6.75A3.754 3.754 0 016 7.5h8.25V6H10.5a2.252 2.252 0 01-2.25-2.25v-1.5A2.252 2.252 0 0110.5 0H15a.75.75 0 01.75.75V7.5H21a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-8.25v3.75A.75.75 0 0112 24zM6 9a2.252 2.252 0 00-2.25 2.25V18h16.5V9h-4.5v2.25a.75.75 0 01-1.5 0V9H6zm4.5-7.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3.75v-3H10.5z" />
  );

export default SvgMailboxFull;
