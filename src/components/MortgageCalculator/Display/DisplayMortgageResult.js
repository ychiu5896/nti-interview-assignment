import "./Display.scss";

const DisplayMortgageResult = ({result}) => {
    const {monthly, total} = result;

    return (
        <div className="display-result">
            <div className="mortgage-header">
                Your results
            </div>
            <div className="mortgage-text">
                Your results are shown below based on the information provided. To adjust the results, edit the form and click "calculate repayments" again.
            </div>
            <div className="mortgage-result-container">
                <div className="monthly">
                    <div>
                        Your monthly repayments
                    </div>
                    <div className="monthly-value">
                        {monthly}
                    </div>
                </div>
                <hr/>
                <div className="total">
                    <div>
                        Total you'll repay over the term
                    </div>
                    <div className="total-value">
                        {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayMortgageResult;