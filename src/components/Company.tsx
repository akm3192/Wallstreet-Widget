import React from 'react';
import './Company.css';

interface CompanyProps {
    abbreviation: string;
    companyName: string;
    stockTrends: Record<string, number[]>;
    onClick: () => void;
}

const Company: React.FC<CompanyProps> = ({ abbreviation, companyName, stockTrends, onClick }) => {
    return (
        <div className="company-row" onClick={onClick}>
            <div className="grid-item">{abbreviation}</div>
            <div className="grid-item">{companyName}</div>
            <div className="grid-item">{stockTrends["2024"].join(", ")}</div>
        </div>
    );
};

export default Company;