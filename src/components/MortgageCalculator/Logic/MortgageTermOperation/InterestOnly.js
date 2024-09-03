import { Operations } from "./Operations";
import formatToCurrency from "./FormatLogic";

export class InterestOnly extends Operations {

    calculate(mortgageAmount, mortgageTerm, interestRate) {
        const principle = parseFloat(mortgageAmount);
        const monthlyInterestRate = (parseFloat(interestRate) / 100) / 12;
        const totalPayments = parseInt(mortgageTerm) * 12;
        const interestOnly = principle * monthlyInterestRate;
        const totalInterestCost = interestOnly * totalPayments;
        const totalCost = totalInterestCost + principle;

        const interestOnlyFormatted = formatToCurrency(interestOnly);
        const totalCostFormatted = formatToCurrency(totalCost);

        return { 
            monthly: interestOnlyFormatted, 
            total: totalCostFormatted 
        }; 
    }
}
