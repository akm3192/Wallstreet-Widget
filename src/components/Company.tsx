import React from 'react';
import './Company.css';

interface CompanyProps {
    abbreviation: string;
    companyName: string;
    stockTrends: Record<string, number[]>;
    current_price: number;   
    onClick: () => void;
}

const Company: React.FC<CompanyProps> = ({ abbreviation, companyName, stockTrends, onClick }) => {
    return (
        <>
            <div className="grid-item" onClick={onClick}>{abbreviation}</div>
            <div className="grid-item" onClick={onClick}>{companyName}</div>
            <div className="grid-item" onClick={onClick}>{stockTrends["2024"].join(", ")}</div>
        </>
    );
};

export default Company;