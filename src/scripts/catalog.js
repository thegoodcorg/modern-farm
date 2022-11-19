export const catalog = (harvestedFood) => {
    let HTMLString = ''
    for (const food of harvestedFood) {
        HTMLString += `<section class="plant">${food.type}</section>`;
    }
    return HTMLString
}