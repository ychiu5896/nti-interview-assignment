import { useRef } from 'react';

const MortgageUIInput = ({ formRef, handleSubmit }) => {

    const handleClearAll = () => {
        if(formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <form className="mortgage-calculator" ref={formRef} onSubmit={handleSubmit}>
            <div>
                Mortgage Calculator
            </div>
            <button type="button" onClick={handleClearAll}>
                Clear All
            </button>
            <div className="mortgageAmount">
                <label className="form-label">
                    Mortgage Amount
                </label>
                <div>
                    <div>
                        $
                    </div>
                    <input type="text" id="mortgageAmount" name="mortgageAmount"/>
                </div>
            </div>
            <div>
                <label className="form-label">
                    Mortgage Term
                </label>
                <div>
                    <input type="text" id="mortgageTerm" name="mortgageTerm"/>
                    <div>
                        years
                    </div>
                </div>
            </div>
            <div>
                <label className="form-label">
                    Interest Rate
                </label>
                <div>
                    <input type="text" id="interestRate" name="interestRate"/>
                    <div>
                        %
                    </div>
                </div>
            </div>
            <div>
                <label className="form-label">
                    Mortgage Type
                </label>
                <div className="mortgage-type-selectors">
                        <input 
                            type="radio" 
                            name="mortgageType" 
                            value="repayment" 
                            id="repayment"
                        />
                        <span className="radio-label">Repayment</span>
                        <input 
                            type="radio" 
                            name="mortgageType" 
                            value="interestOnly" 
                            id="interestOnly"
                        />
                        <span className="radio-label">Interest Only</span>
                </div>
            </div>
            <button type="submit">
                Calculate Repayments
            </button>
        </form>
    );
}

export default MortgageUIInput;
