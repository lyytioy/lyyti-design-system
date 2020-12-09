import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChatText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10 13a3 3 0 013-3h7.25a.25.25 0 00.25-.25V1.5A1.5 1.5 0 0019 0H1.5A1.5 1.5 0 000 1.5V16a1.5 1.5 0 001.5 1.5h3V21a.5.5 0 00.854.353L9.207 17.5h.543a.25.25 0 00.25-.25zm-2.5-2.25h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5zm7.5-5H4.5a.75.75 0 010-1.5H15a.75.75 0 010 1.5z" />,
    <path d="M22.5 11.5H13a1.5 1.5 0 00-1.5 1.5v6.5A1.5 1.5 0 0013 21h3.333l3.867 2.9a.5.5 0 00.8-.4V21h1.5a1.5 1.5 0 001.5-1.5V13a1.5 1.5 0 00-1.5-1.5z" />
  );

export default SvgConversationChatText;
