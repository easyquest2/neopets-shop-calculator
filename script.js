// This function calculates the total cost to reach a certain shop size number
function calculateTotalCost(shopSizeNumber) {
    // The number of upgrades is the shop size number itself.
    // Shop size 1 is the starting point, so it represents 0 upgrades
    const upgrades = shopSizeNumber - 1;

    // The cost formula is 100 * S^2 + 100 * S, where S is the number of upgrades
    return 100 * Math.pow(upgrades, 2) + 100 * upgrades;
}

function calculateShopUpgrade() {
    const currentSizeInput = document.getElementById('currentSize');
    const desiredSizeInput = document.getElementById('desiredSize');

    const currentSizeNumber = parseInt(currentSizeInput.value);
    const desiredSizeNumber = parseInt(desiredSizeInput.value);

    // Validate inputs
    if (isNaN(currentSizeNumber) || isNaN(desiredSizeNumber) || currentSizeNumber < 1 || desiredSizeNumber < 1) {
        alert("Please enter a valid shop size number (1 or greater).");
        return;
    }
    if (desiredSizeNumber <= currentSizeNumber) {
        alert("Desired shop size number must be greater than the current size.");
        return;
    }

    // Calculate total cost to reach both sizes
    const totalCostCurrent = calculateTotalCost(currentSizeNumber);
    const totalCostDesired = calculateTotalCost(desiredSizeNumber);

    // The cost of the upgrade is the difference
    const costOfUpgrade = totalCostDesired - totalCostCurrent;

    // Calculate item capacity based on the desired shop size number
    const itemCapacity = 5 * desiredSizeNumber;

    // Display the results
    document.getElementById('upgradeCost').innerHTML = `<strong>Cost of this upgrade:</strong> ${costOfUpgrade.toLocaleString()} NP`;
    document.getElementById('totalSpent').innerHTML = `<strong>Total spent to reach this size:</strong> ${totalCostDesired.toLocaleString()} NP`;
    document.getElementById('capacityMessage').innerHTML = `Your shop will now hold ${itemCapacity} items. Okay Walmart`;
}