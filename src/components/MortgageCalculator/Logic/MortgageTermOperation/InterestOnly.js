import { Operations } from "./Operations";

export class InterestOnly extends Operations {

    calculate(mortgageAmount, mortgageTerm, interestRate) {
        const principle = parseFloat(mortgageAmount);
        const monthlyInterestRate = (parseFloat(interestRate) / 100) / 12;
        const interestOnly = principle * monthlyInterestRate;
        const interestOnlyFormatted = interestOnly.toFixed(2);
        const totalCost = interestOnly * parseInt(mortgageTerm) * 12 + principle;
        const totalCostFormatted = totalCost.toFixed(2);

        return { 
            monthly: interestOnlyFormatted, 
            total: totalCostFormatted 
        }; 
    }
}
