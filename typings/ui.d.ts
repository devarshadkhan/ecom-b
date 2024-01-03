import React from "react";

interface OptionsTypes {
    label: any;
    value: any;
}
interface Common {
    label: string;
    error?: string;
    deletable?: boolean;
    onDelete?: () => void;
}

interface InputProps extends Common, React.ComponentPropsWithoutRef<"input"> {
    imageUrl?: any;
}

interface TextAreaProps extends Common, React.ComponentPropsWithoutRef<"textarea"> { }

interface SelectProps extends Common, React.ComponentPropsWithoutRef<"select"> {
    options: OptionsTypes[];
}

interface FP extends Common, React.ComponentPropsWithoutRef<"input"> { }

interface ButtonProps extends React.ComponentPropsWithRef<"button"> { }
