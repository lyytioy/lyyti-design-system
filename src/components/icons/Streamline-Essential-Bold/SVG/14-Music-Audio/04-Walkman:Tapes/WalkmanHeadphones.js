import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanHeadphones = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0A12.013 12.013 0 000 12v7.5a2 2 0 004 0V15a2 2 0 00-1.778-1.988.249.249 0 01-.222-.248V12a10 10 0 0120 0v.764a.25.25 0 01-.222.248A2 2 0 0020 15v4.5a2 2 0 004 0V12A12.013 12.013 0 0012 0z" />,
    <path d="M17.5 8h-9A1.5 1.5 0 007 9.5v.25a.25.25 0 01-.25.25H6.5A1.5 1.5 0 005 11.5V14a1.5 1.5 0 001.5 1.5h.25a.25.25 0 01.25.25v6.75A1.5 1.5 0 008.5 24h9a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0017.5 8zm-1 3v8a1 1 0 01-1 1h-5a1 1 0 01-1-1v-8a1 1 0 011-1h5a1 1 0 011 1z" />,
    <circle cx={13.5} cy={13} r={1} />,
    <circle cx={13.5} cy={17} r={1} />
  );

export default SvgWalkmanHeadphones;
