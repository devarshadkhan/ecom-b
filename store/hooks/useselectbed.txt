import React, { useEffect } from "react";
import useAppDispatch from "./usedispatch";
import useAppSelector from "./useselector";
import selectbedSlice from "store/slices/selectbed";

/**
 * Reusable Hook for Bed Selection
 * @returns
 */

interface Bed {
    id: string;
    bedId: string;
    size?: "";
    name?: "";
    image?: "";
    price?: number;
}

interface Color {
    name: string;
    image: string;
}

interface Accessories {
    name: string;
    price: number;
}

const useSelectBed = () => {
    const dispatch = useAppDispatch();
    const bedState = useAppSelector((state) => state.selectbed);

    const { price } = bedState.bed;
    const { headboard, storage, feet, mattress } = bedState.accessories;

    useEffect(() => {
        dispatch(
            selectbedSlice.actions.setTotalPrice(
                Number(headboard.price) +
                    Number(storage.price) +
                    Number(feet.price) +
                    Number(mattress.price) +
                    Number(price)
            )
        );
    }, [headboard, storage, feet, mattress, price, dispatch]);

    // HANDLER FOR BED SIZE

    const setBed = React.useCallback(
        (value: Bed) => {
            dispatch(selectbedSlice.actions.setBed(value));
        },
        [dispatch]
    );
    // HANDLER FOR BED COLOR

    const setBedColor = React.useCallback(
        (value: Color) => {
            dispatch(selectbedSlice.actions.setBedColor(value));
        },
        [dispatch]
    );

    // HANDLER FOR BED COLOR

    const setBedHeadBoard = React.useCallback(
        (value: Accessories) => {
            dispatch(selectbedSlice.actions.setBedHeadBoard(value));
        },
        [dispatch]
    );

    // HANDLER FOR BED COLOR

    const setBedStorage = React.useCallback(
        (value: Accessories) => {
            dispatch(selectbedSlice.actions.setBedStorage(value));
        },
        [dispatch]
    );

    // HANDLER FOR BED COLOR

    const setBedFeet = React.useCallback(
        (value: Accessories) => {
            dispatch(selectbedSlice.actions.setBedFeet(value));
        },
        [dispatch]
    );

    // HANDLER FOR BED COLOR

    const setBedMatters = React.useCallback(
        (value: Accessories) => {
            dispatch(selectbedSlice.actions.setBedMatters(value));
        },
        [dispatch]
    );

    // HANDLER FOR BED PRICE

    // Return Values

    return {
        bedState,
        setBed,
        setBedColor,
        setBedHeadBoard,
        setBedStorage,
        setBedFeet,
        setBedMatters,
    };
};
export default useSelectBed;
