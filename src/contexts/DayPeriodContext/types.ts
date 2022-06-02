import React, {
    ReactNode
} from 'react';

export interface DayPeriodProviderProps {
    children: ReactNode;
}

export interface DayPeriodContextData {
    handleAddDayPeriod(period: boolean): void;
}