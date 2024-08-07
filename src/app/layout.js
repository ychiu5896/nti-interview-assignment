import "@/app/_styles/global.scss";

export const metadata = {
	title: "NTI Pre-Interview Assignment",
	description: "A pre-interview assignment for NTI Frontend Developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div id="app-wrapper" className="bg-slate-100">
					{children}
				</div>
			</body>
		</html>
	);
}
