import { useRef, useState } from 'react';
import "./UI.scss";

const MortgageUIInput = ({ formRef, handleSubmit }) => {

    const [errors, setErrors] = useState({});

    const handleClearAll = () => {
        if(formRef.current) {
            formRef.current.reset();
        }
        setErrors({});
    }

    const validateForm = () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());
        let formErrors = {};

        if (!data.mortgageAmount) {
            formErrors.mortgageAmount = "This field is required";
        }
        if (!data.mortgageTerm) {
            formErrors.mortgageTerm = "This field is required";
        }
        if (!data.interestRate) {
            formErrors.interestRate = "This field is required";
        }
        if (!data.mortgageType) {
            formErrors.mortgageType = "This field is required";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }; 

    const handleSubmitWithValidation = (e) => {
        e.preventDefault();
        if(validateForm()) {
            handleSubmit(e)
        }
    }

    return (
        <form className="mortgage-calculator" ref={formRef} onSubmit={handleSubmitWithValidation}>
            <div className="UIheader">
                <div>
                    Mortgage Calculator
                </div>
                <button type="button" onClick={handleClearAll}>
                    Clear All
                </button>
            </div>
            <div className="mortgageAmount input-set">
                <label className="form-label">
                    Mortgage Amount
                </label>
                <div className="text-field">
                    <div className="input-units">
                        $
                    </div>
                    <input type="text" id="mortgageAmount" name="mortgageAmount"/>
                </div>
                {errors.mortgageAmount && <div className="error">{errors.mortgageAmount}</div>}
            </div>
            <div className="input-set">
                <label className="form-label">
                    Mortgage Term
                </label>
                <div className="text-field">
                    <input type="text" id="mortgageTerm" name="mortgageTerm"/>
                    <div className="input-units">
                        years
                    </div>
                </div>
                {errors.mortgageTerm && <div className="error">{errors.mortgageTerm}</div>}
            </div>
            <div className="input-set">
                <label className="form-label">
                    Interest Rate
                </label>
                <div className="text-field">
                    <input type="text" id="interestRate" name="interestRate"/>
                    <div className="input-units">
                        %
                    </div>
                </div>
                {errors.interestRate && <div className="error">{errors.interestRate}</div>}
            </div>
            <div className="input-set">
                <label className="form-label">
                    Mortgage Type
                </label>
                <div className="mortgage-type">
                    <div className="selector-container">
                        <div className="mortgage-type-selector">
                            <input 
                                type="radio" 
                                name="mortgageType" 
                                value="repayment" 
                                id="repayment"
                            />
                            <span className="radio-label">Repayment</span>
                        </div>
                    </div>

                    <div className="selector-container">
                        <div className="mortgage-type-selector">
                            <input 
                                type="radio" 
                                name="mortgageType" 
                                value="interestOnly" 
                                id="interestOnly"
                            />
                            <span className="radio-label">Interest Only</span>
                        </div>
                    </div>
                </div>
                {errors.mortgageType && <div className="error">{errors.mortgageType}</div>}
            </div>
            <button className="form-submit" type="submit">
                <img src="/images/icon-calculator.svg" alt="Calculator Icon" />
                Calculate Repayments
            </button>
        </form>
    );
}

export default MortgageUIInput;
