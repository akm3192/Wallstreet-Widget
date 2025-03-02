import React, { useState } from 'react';
import './Dashboard.css';
import companies from '../companies.json';
import Company from './Company';

function Invest() {
    const [searchTerm, setSearchTerm] = useState('');
    const [items] = useState(companies);

    const handleSearch = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const filtered = items.filter(item => (item.company_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())));

    return (
        <>
        <br></br>

        <input className='search-bar'
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            />

        <br></br>
        <div className="grid-container">
                <div className="grid-item">Abbreviation</div>
                <div className="grid-item">Name</div>
                <div className="grid-item">Trends</div>
        {
            filtered.map((company, index) => (
                <Company
                    key={index}
                    abbreviation={company.abbreviation}
                    companyName={company.company_name}
                    stockTrends={company.stock_trends}
                    onClick={() => { } }
                    current_price={company.current_price}/>
            ))

        }
        </div>

        </>
    );
}

export default Invest;
    