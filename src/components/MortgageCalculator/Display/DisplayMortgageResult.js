const DisplayMortgageResult = ({result}) => {
    const {monthly, total} = result;

    return (
        <div>
            <div>
                Your results
            </div>
            <div>
                Your results are shown below based on the information provided. To adjust the results, edit the form and click "calculate repayments" again.
            </div>
            <div>
                <div>
                    <div>
                        Your monthly repayments
                    </div>
                    <div>
                        {monthly}
                    </div>
                </div>
                <div>
                    <div>
                        Total you'll repay over the term
                    </div>
                    <div>
                        {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayMortgageResult;