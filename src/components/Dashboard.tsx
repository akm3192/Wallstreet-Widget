import React, { useState } from 'react';
import './Dashboard.css';
import companies from '../companies.json';
import Company from './Company';
import EarningsContainer from './EarningsContainer';

interface CompanyType {
    abbreviation: string;
    company_name: string;
    stock_trends: {
        [key: string]: number[];
    };
}

function Dashboard() {
    const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(null);

    const handleCompanyClick = (company: CompanyType) => {
        setSelectedCompany(company);
    };

    return (
        <>
        <div>
            <div className="grid-container">
                <div className="grid-item">Abbreviation</div>
                <div className="grid-item">Name</div>
                <div className="grid-item">Trends</div>
                {companies.map((company, index) => (
                    <Company
                        key={index}
                        abbreviation={company.abbreviation}
                        companyName={company.company_name}
                        stockTrends={company.stock_trends}
                        onClick={() => handleCompanyClick(company)}
                    />
                ))}
            </div>
            {selectedCompany && (
                <div className="company-details">
                    <h2>{selectedCompany.company_name}</h2>
                    <p>Abbreviation: {selectedCompany.abbreviation}</p>
                    <p>Stock Trends (2024): {selectedCompany.stock_trends["2024"].join(", ")}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
        <div className="container">
            <EarningsContainer text="(Earnings)"></EarningsContainer>
        </div>
        </>
    );
}

export default Dashboard;
    