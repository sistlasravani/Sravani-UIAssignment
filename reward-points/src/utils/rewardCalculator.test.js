import { calculateRewardPoints } from "./rewardCalculator";

describe('calculatePoints', () => {
    test('returns 0 for amount less than 50', () => {
        expect(calculateRewardPoints(30)).toBe(0);
    });

    test('returns 0 for exactly $50', () => {
        expect(calculateRewardPoints(50)).toBe(0);
    });

    test('returns 1 point per dollar for amount b/w $50 and $100', () => {
        expect(calculateRewardPoints(75)).toBe(25); //75-50 = 25 points
    });

    test('returns 2 points per dollar for above $100', () => {
        expect(calculateRewardPoints(120)).toBe(90);
    });
})