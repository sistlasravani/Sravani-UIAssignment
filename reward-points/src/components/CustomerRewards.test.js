import React from "react";
import { render, screen } from '@testing-library/react';
import CustomerRewards from "./CustomerRewards";

describe('CustomerRewards Components', () => {
    const transactions = [
        { customer: '1', date: "2024-06-15", amount: 120 },
        { customer: '1', date: "2024-06-20", amount: 75 },
        { customer: '2', date: "2024-08-10", amount: 50 }
    ]

    test('renders Customer IDs', () => {
        render(<CustomerRewards transactions={transactions}/>);
        const element = screen.getByTestId('customer-id-1')
        expect(element).toBeInTheDocument();
        screen.debug()
    });

    test('renders monthly rewards for each customer', () => {
        render(<CustomerRewards transactions={transactions}/>);

        const element = screen.getByTestId('customer-month-June')
        expect(element).toBeInTheDocument();
    });

    test('displays total points for each month', () => {
        render(<CustomerRewards transactions={transactions}/>);

        const element = screen.getByTestId('customer-tp-115')
        expect(element).toBeInTheDocument();
    });
});