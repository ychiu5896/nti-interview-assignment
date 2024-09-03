import { Operations } from "./Operations";
import formatToCurrency from "./FormatLogic";

export class Repayment extends Operations {

    calculate(mortgageAmount, mortgageTerm, interestRate) {
        const principle = parseFloat(mortgageAmount);
        const monthlyInterestRate = (parseFloat(interestRate) / 100) / 12
        const totalPayments = parseInt(mortgageTerm) * 12;
        const monthlyPayments = (principle * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        const totalCost = monthlyPayments * totalPayments;


        const monthlyPaymentsFormatted = formatToCurrency(monthlyPayments);
        const totalCostFormatted = formatToCurrency(totalCost);

        return {
            monthly: monthlyPaymentsFormatted, 
            total: totalCostFormatted
        }
    }
}