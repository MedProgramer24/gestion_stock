import React from 'react';
import './Stock.css';

const Stock = () => {
  const stockData = [
    { id: 9, name: 'gel Cerave', category: 'Huile démaquillante', status: 'fixed', percentage: '28.776%' },
    { id: 10, name: 'gel Cerave', category: 'Gel nettoyant visage', status: 'fixed', percentage: '28.776%' },
    { id: 11, name: 'gel Cerave', category: 'Serum à la vitamine C', status: 'fixed', percentage: '28.776%' },
    { id: 12, name: 'gel Cerave', category: 'Gel nettoyant visage', status: 'fixed', percentage: '28.776%' },
  ];

  return (
    <div className="stock-container">
      {/* Header with Date Picker and Print Button */}
      <div className="header-section">
        <div className="date-picker">
          <span>De</span>
          <input type="text" placeholder="jj/mm/aaaa" />
          <span>à</span>
          <input type="text" placeholder="jj/mm/aaaa" />
        </div>
        <button className="print-button">IMPRIMER LE RAPPORT</button>
      </div>

      {/* Warning Button */}
      <button className="warning-button">ARTICLE EN ÉTAT CRITIQUE</button>

      {/* Add Button */}
      <div className="add-button-container">
        <button className="add-button">+ Ajouter</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <table className="stock-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>État</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
                <td>
                  <button className="edit-button">✏️ Modifier</button>
                </td>
                <td>
                  <button className="delete-button">🗑️ Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-button">Previous</button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Stock;