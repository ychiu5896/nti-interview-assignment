import MortgageCalculator from "@/components/MortgageCalculator";

export default function Home() {
	return (
		<main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-md-4">
			<div className="d-flex flex-column w-100" style={{ maxWidth: "1008px" }}>
				<MortgageCalculator />
			</div>
		</main>
	);
}
