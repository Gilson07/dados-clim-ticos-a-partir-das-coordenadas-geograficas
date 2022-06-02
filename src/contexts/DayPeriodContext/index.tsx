import React, {
    createContext,
    useState,
    ReactNode
} from 'react';

import { DayPeriodProviderProps, DayPeriodContextData } from './types';

export const DayPeriodContext = createContext<DayPeriodContextData>({} as DayPeriodContextData);

export const DayPeriodProvider = ({ children }: DayPeriodProviderProps) => {

    const [dayPeriod, setDayPeriod] = useState<boolean>();

    function handleAddDayPeriod(period: boolean) {
        setDayPeriod(period)
    }

    return (
        <DayPeriodContext.Provider value={{ dayPeriod, handleAddDayPeriod }}>
            {children}
        </DayPeriodContext.Provider>
    );
}