import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraphVisualizer from './components/Graph/GraphVisualizer';
import SudokuVisualizer from './components/Sudoku/SudokuVisualizer'
import Nqueen from './components/NQueen/Nqueen'
import Error from './Error';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<React.StrictMode><App /></React.StrictMode>} />
        <Route path='/graph-visualizer' element={<GraphVisualizer />} />
        <Route path='/sudoku-visualizer' element={<SudokuVisualizer />} />
        <Route path='/n-queen-visualizer' element={<Nqueen />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);

