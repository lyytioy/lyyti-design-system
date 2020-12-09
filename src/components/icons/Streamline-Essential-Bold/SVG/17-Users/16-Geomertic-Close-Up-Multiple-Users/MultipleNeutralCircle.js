import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleNeutralCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={8} cy={10.25} r={3.75} />,
    <circle cx={18} cy={12.5} r={3} />,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 2a9.992 9.992 0 018.876 14.6.251.251 0 01-.35.1A4.925 4.925 0 0018 16a4.993 4.993 0 00-3.928 1.906.251.251 0 01-.4-.008A6.984 6.984 0 003.5 16.652a.249.249 0 01-.21.054.252.252 0 01-.173-.13A9.99 9.99 0 0112 2z" />
  );

export default SvgMultipleNeutralCircle;
