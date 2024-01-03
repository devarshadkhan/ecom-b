import React from "react";

// interface InputTypes {
//     email: string;
//     password: string;
//     [K: string]: string;
// }
type E = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
/**
 * Custom Hook For Inputs
 * @param initialState
 * @returns
 */
const useInputs = <T>(initialState: T) => {
    const [inputs, setInputs] = React.useState<T>(initialState);

    const onChangeInputs = React.useCallback(
        (e: E) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );
    // Return Values
    return {
        inputs,
        onChangeInputs,
    };
};
export default useInputs;
