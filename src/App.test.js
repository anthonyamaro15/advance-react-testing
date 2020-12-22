import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("MissionForm test", () => {
//    test("render without error", () => {
//       render(<App />);
//    });

//    test("renders message when isFetchingData is true", () => {
//       render(<App isFetchingData={true} />);
//       expect(screen.getByText(/we are fetching data/i)).not.toBeNull();
//       expect(screen.queryByText(/get data/i)).toBeNull();
//    });

//    test("renders button when isFetchingData is false", () => {
//       render(<App isFetchingData={false} />);
//       expect(screen.getByText(/get data/i)).not.toBeNull();
//       // queryBy will return null instead of throwing an error
//       expect(screen.queryByText(/we are fetching data/i)).toBeNull();
//    });

//    test("calls getData when button is clicked", () => {
//       // jest.fun() creates fake functions
//       const mockGetData = jest.fn();

//       render(<App getData={mockGetData} />);

//       const button =  screen.getByRole('button');
//       fireEvent.click(button);

//       expect(mockGetData.mock.calls).toHaveLength(1);
//       // expect(mockGetData.mock.calls).toBe(1);
//       // expect(mockGetData.mock.calls.length === 1);

//    })
// })