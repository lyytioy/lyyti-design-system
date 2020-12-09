import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={5.335} cy={18.75} r={2} />,
    <path d="M16.1.25a7.234 7.234 0 00-6.275 3.632 5.752 5.752 0 00-2.941-.807A5.944 5.944 0 001 9.068a5.944 5.944 0 005.821 5.993A5.8 5.8 0 0015.05 16.2a7.807 7.807 0 001.364.121c4.2 0 7.251-3.379 7.251-8.034A7.726 7.726 0 0016.1.25zm1.733 10.5a1 1 0 111-1 1 1 0 01-.998 1zm-4-1a1 1 0 11-1-1 1 1 0 011.002 1zm-6 1a1 1 0 111-1 1 1 0 01-.998 1z" />,
    <circle cx={1.835} cy={22.25} r={1.5} />
  );

export default SvgMessagesBubbleTyping;
