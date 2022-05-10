import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";

export type StackProps = MuiStackProps;

const Stack = (props: StackProps) => {
    return <MuiStack {...props} />;
}

export default Stack;
