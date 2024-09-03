const FormatLogic = (unformattedVal) => {

    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return currencyFormat.format(unformattedVal);

}

export default FormatLogic;