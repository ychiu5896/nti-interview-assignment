import { Repayment } from "./MortgageTermOperation/Repayment";
import { InterestOnly } from "./MortgageTermOperation/InterestOnly";

export class OperationFactory { //determins what type of calculation is required

    createOperation(mortgageType) {
        switch (mortgageType) {
            case "repayment":
                return new Repayment();
            case "interestOnly":
                return new InterestOnly();
            default:
                throw new Error(`Unknown mortgage type: ${this.mortgageType}`);
        }
    }
}