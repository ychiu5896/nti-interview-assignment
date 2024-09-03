import { useRef, useState } from 'react';
import "./UI.scss";

const MortgageUIInput = ({ formRef, handleSubmit }) => {

    const [errors, setErrors] = useState({});

    const handleClearAll = () => {
        if(formRef.current) {
            formRef.current.reset();
        }
        resetErrorsMissingFields();
        removeRadioChange();
        setErrors({});
    }

    const validateForm = () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());
        let formErrors = {};

        resetErrorsMissingFields();

        if (!data.mortgageAmount) {
            formErrors.mortgageAmount = "This field is required";
            document.querySelector('.mortgageAmount').classList.add('field-missing');
        }
        if (!data.mortgageTerm) {
            formErrors.mortgageTerm = "This field is required";
            document.querySelector('.mortgageTerm').classList.add('field-missing');
        }
        if (!data.interestRate) {
            formErrors.interestRate = "This field is required";
            document.querySelector('.interestRate').classList.add('field-missing');
        }
        if (!data.mortgageType) {
            formErrors.mortgageType = "This field is required";
            document.querySelector('.mortgageType').classList.add('field-missing');
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

    const handleRadioChange = (e) => {
        removeRadioChange();
        const selectedContainer = e.target.closest('.selector-container');
        if (selectedContainer) {
            selectedContainer.classList.add('selected');
        }
    };

    const resetErrorsMissingFields = () => {
        document.querySelectorAll('.input-set').forEach(container => {
            container.classList.remove('field-missing');
        })
    }
    
    const removeRadioChange = () => {
        document.querySelectorAll('.selector-container').forEach(container => {
            container.classList.remove('selected');
        });
    }

    return (
        <form className="UI-container" ref={formRef} onSubmit={handleSubmitWithValidation}>
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
                        £
                    </div>
                    <input type="text" id="mortgageAmount" name="mortgageAmount"  className="field-text"/>
                </div>
                {errors.mortgageAmount && <div className="error">{errors.mortgageAmount}</div>}
            </div>
            <div className="term-rate-container">
                <div className="mortgageTerm input-set">
                    <label className="form-label">
                        Mortgage Term
                    </label>
                    <div className="text-field">
                        <input type="text" id="mortgageTerm" name="mortgageTerm" className="field-text"/>
                        <div className="input-units">
                            years
                        </div>
                    </div>
                    {errors.mortgageTerm && <div className="error">{errors.mortgageTerm}</div>}
                </div>
                <div className="interestRate input-set">
                    <label className="form-label">
                        Interest Rate
                    </label>
                    <div className="text-field">
                        <input type="text" id="interestRate" name="interestRate" className="field-text"/>
                        <div className="input-units">
                            %
                        </div>
                    </div>
                    {errors.interestRate && <div className="error">{errors.interestRate}</div>}
                </div>
            </div>
            <div className="mortgageType input-set">
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
                                onChange={handleRadioChange}
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
                                onChange={handleRadioChange}
                            />
                            <span className="radio-label">Interest Only</span>
                        </div>
                    </div>
                </div>
                {errors.mortgageType && <div className="error">{errors.mortgageType}</div>}
            </div>
            <div className="form-submit">
                <button type="submit">
                    <img src="/images/icon-calculator.svg" alt="Calculator Icon" />
                    Calculate Repayments
                </button>
            </div>
        </form>
    );
}

export default MortgageUIInput;
