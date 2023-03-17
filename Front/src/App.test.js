
import { render, screen } from '@testing-library/react';
import App from './App';


/* beforeEach(()=>{
  render(<App />);
})*/

test('Render Horoscopo title', () => {  
  render(<App />);
  const title = screen.getByText(/horoscopo/i);
  expect(title).toBeInTheDocument();
});

test('Should renders the combobox of orden', () => { 
  render(<App />); 
  const inputEl = screen.getByLabelText(/orden/i);
  expect(inputEl).toBeInTheDocument();
});

test('Should renders the combobox of position of elements', () => {  
  render(<App />);
  const inputEl = screen.getByLabelText(/Ver como/i);
  expect(inputEl).toBeInTheDocument();
});


