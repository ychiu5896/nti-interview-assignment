import { Operations } from "./Operations";

export class Repayment extends Operations {

    calculate(mortgageAmount, mortgageTerm, interestRate) {
        const principle = parseFloat(mortgageAmount);
        const monthlyInterestRate = (parseFloat(interestRate) / 100) / 12
        const totalPayments = parseInt(mortgageTerm) * 12;
        const monthlyPayments = (principle * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        const monthlyPaymentsFormatted = monthlyPayments.toFixed(2);
        const totalCost = monthlyPayments * totalPayments;
        const totalCostFormatted = totalCost.toFixed(2);
        return {
            monthly: monthlyPaymentsFormatted, 
            total: totalCostFormatted
        }
    }
}