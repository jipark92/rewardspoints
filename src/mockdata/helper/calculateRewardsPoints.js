//calculate rewards
export const calculateRewardPoints = (price) => {
    const moreThan50 = 1
    const moreThan100 = 2
    if (price > 100) {
        return (price - 100) * moreThan100 + 50 * moreThan50
    } else if (price > 50) {
        return (price - 50) * moreThan50
    } else {
        return 0
    }
}
