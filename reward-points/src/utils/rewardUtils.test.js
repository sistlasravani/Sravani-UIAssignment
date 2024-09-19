import { calculateMonthlyRewards } from "./rewardUtils";

describe('calculateMonthlyRewards', () => {
    const transactions = [
        { customer: '1', date: "2024-06-15", amount: 120 },
        { customer: '1', date: "2024-06-20", amount: 75 },
        { customer: '2', date: "2024-08-10", amount: 50 }
    ];

    test('calculates rewards for each customer', () => {
        const rewards = calculateMonthlyRewards(transactions);

        expect(rewards[1]['June'].totalPoints).toBe(115); // 90 + 25 points for customer 1;
        expect(rewards[2]['August'].totalPoints).toBe(0); // No points for customer 2
    });

    test('group transcation by month for each customer', () => {
        const rewards = calculateMonthlyRewards(transactions);

        expect(rewards[1]).toHaveProperty('June');
        expect(rewards[2]).toHaveProperty('August');
    });

    test('returns an empty object if no transactions', () => {
        const rewards = calculateMonthlyRewards([]);
        
        expect(rewards).toEqual({});
    });
})