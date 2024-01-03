import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'typings/store'


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector;