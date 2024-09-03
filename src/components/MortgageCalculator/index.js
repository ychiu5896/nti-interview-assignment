"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";
import MortgageUIInput from "./UI/MortgageUIInput";
import MortgageService from "./Logic/MortgageService";
import DisplayMortgageResult from "./Display/DisplayMortgageResult";
import DisplayDefaultResult from "./Display/DisplayDefaultResult";

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);
	const [formData, setFormData] = useState({});
	const [result, setResult] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		setFormData(data)
	};

	const handleResult = (result) => {
		setResult(result);
	}

	const isDataEmpty = (data) => Object.keys(data).length === 0;

	return (
		<div className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100">
			<MortgageUIInput formRef={formRef} handleSubmit={handleSubmit}/>
			{!isDataEmpty(formData) && ( //prevent component when there are no inputs
				<MortgageService formData={formData} handleResult={handleResult}/>
			)}
			{isDataEmpty(result) ? 
				(<DisplayDefaultResult/>) : 
				( <DisplayMortgageResult result={result}/>
			)}
		</div>
	);
};

export default MortgageCalculator;
