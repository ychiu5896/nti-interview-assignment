import {useEffect} from 'react';
import { OperationFactory } from "./OperationFactory";


const mortgageService = ({formData, handleResult}) => {

    useEffect(() => {
        const {mortgageType, mortgageAmount, mortgageTerm, interestRate} = formData;
        const operationFactory = new OperationFactory();
    
        const calculateResult = () => {
            const operation = operationFactory.createOperation(mortgageType);
            const result = operation.calculate(mortgageAmount, mortgageTerm, interestRate);
            handleResult(result);
        }
    
        calculateResult();
    },[formData]);

    return null;
}

export default mortgageService;