"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";
import MortgageUIInput from "./UI/MortgageUIInput";


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

	return (
		<div className="mortgage-calculator d-flex flex-column flex-md-row bg-white rounded-4 w-100">
			<MortgageUIInput formRef={formRef} handleSubmit={handleSubmit}/>
			{/* <MortgageOperation formData={formData} handleResult={handleResult}/> */}
			{/* <DisplayMortgageResult/> */}
		</div>
	);
};

export default MortgageCalculator;
