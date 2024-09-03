import "./Display.scss";
const DisplayDefaultResult = () => {
 
    return (
        <div className="default-result-container">
            <div>
                <div>
                    <img src="/images/illustration-empty.svg" alt="Calculator Icon" />
                </div>
                <div className="default-header">
                    Results shown here
                </div>
                <div className="default-text">
                    Complete the form and click "calculate repayments" to see what your monthly repayments would be.
                </div>
            </div>
        </div>
    )
}

export default DisplayDefaultResult;