import { render, screen } from '@testing-library/react';
import HomePage from "../components/HomePage";


test('renders Welcome to Sonar Dashboard title', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Welcome to Sonar Dashboard/i); //i represents case insensitive
    expect(linkElement).toBeInTheDocument();
});

test('should make a get call to fetch details from api', () => {
   const mockFetchData = jest.spyOn(global, "fetch")
       .mockImplementation(() => { return {coverage: 98.6, blocker: 0, critical: 0} });
    render(<HomePage />);
    expect(mockFetchData).toHaveBeenCalledTimes(1);
});

test('should display the details got from api', () => {
    const mockFetchData = jest.spyOn(global, 'fetch')
        .mockImplementation(() => { return {coverage: 98.6, blocker: 0, critical: 0} });
    render(<HomePage />);
    expect(mockFetchData).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Coverage: 98.6/i)).toBeInTheDocument();
    expect(screen.getByText(/Blocker: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Critical: 0/i)).toBeInTheDocument();
});
