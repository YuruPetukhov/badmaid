import { render, screen } from "@testing-library/react";
import { Table } from "../components/Table/Table";
import "@testing-library/jest-dom";

const initCleanings = { upcoming: [], incoming: [] }
const mockData = {
	previous: [
		{
			address: "Fooweg 8",
			jobs: [
				{
					agent: "Monica Agent",
					location: "Fooweg 8",
					type: "home cleaning",
					periodicity: "Two weeks",
					date: {
						day: "SAT",
						month: "May",
						date: 27,
						time: "9:30 - 11:30"
					}
				}
			]
		}
	],
	upcoming: [
		{
			address: "Fooweg 8",
			"jobs": [
				{
					agent: "Oliveira Agent",
					location: "Fooweg 8",
					type: "home cleaning",
					periodicity: "Weekly",
					date: {
						day: "FRI",
						month: "Oct",
						date: 13,
						time: "11:00 - 14:00"
					}
				},
				{
					agent: "Oliveira Agent",
					location: "Fooweg 8",
					type: "home cleaning",
					periodicity: "Two weeks",
					date: {
						day: "FRI",
						month: "Oct",
						date: 27,
						time: "8:30 - 11:30"
					}
				},
				{
					agent: "Oliveira Agent",
					location: "Fooweg 8",
					type: "end of tenancy",
					periodicity: "Two weeks",
					date: {
						day: "SAT",
						month: "Oct",
						date: 28,
						time: "8:30 - 11:30"
					}
				}
			]
		},
		{
			address: "Foobar 9",
			jobs: [
				{
					agent: "Jessica Agent",
					location: "Foobar 9",
					type: "home cleaning",
					periodicity: "Two weeks",
					date: {
						day: "FRI",
						month: "Oct",
						date: 20,
						time: "8:30 - 10:30"
					}
				},
				{
					agent: "Jessica Agent",
					location: "Foobar 9",
					type: "home cleaning",
					periodicity: "Monthly",
					date: {
						day: "MON",
						month: "Oct",
						date: 23,
						time: "10:00 - 12:00"
					}
				}
			]
		}
	]
}
test("TableComponent should rendered", () => {
	render(<Table cleanings={initCleanings} />);
	expect(screen.getByTestId("TableComponent")).toBeInTheDocument()
});

test("TableComponent should rendered correct isLoading state", () => {
	render(<Table cleanings={initCleanings} isLoading />);
	expect(screen.getByTestId("TableSkeleton")).toBeInTheDocument()
});

test("TableComponent should rendered correct with data", async () => {
	render(<Table cleanings={mockData} />);
	expect(screen.queryByTestId("TableSkeleton")).toBeNull()
	expect(screen.getByTestId('TableComponent')).toHaveTextContent('Fooweg 8')
});
