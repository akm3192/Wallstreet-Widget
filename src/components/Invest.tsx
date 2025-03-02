import React, { useState } from 'react';
import './Dashboard.css';
import companies from '../companies.json';
import Company from './Company';
import { IonButton, IonModal } from '@ionic/react';
interface CompanyType {
    abbreviation: string;
    company_name: string;
    stock_trends: {
        [key: string]: number[];
    };
    current_price: number;
}

function Invest() {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [items] = useState(companies);
    const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(null);
    const [shares, setShares] = useState(0);

    const handleCompanyClick = (company: CompanyType) => {
        setSelectedCompany(company);
    };

    const purchaseShares = () => {
        /* purchase number of shares stored in shares variable*/
    }

    const changeShares = (event:any) => {
        setShares(event.target.value);
    }

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
                    onClick={() => handleCompanyClick(company)}
                    current_price={company.current_price}/>
            ))}
        </div>
        {selectedCompany && (
            <div className="company-details">
                <h2>{selectedCompany.company_name}</h2>
                <p>Abbreviation: {selectedCompany.abbreviation}</p>
                <p>Stock Trends (2024): {selectedCompany.stock_trends["2024"].join(", ")}</p>
                <p>Market Price: ${selectedCompany.current_price}</p>
                {}
                <IonButton id="button" onClick={() => {setShowModal(true)}}>I want to invest</IonButton>
            </div>
        )}
        <div className='modal-box'>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
            <br></br>
            How many shares would you like to purchase?
            <input
                type="number"
                placeholder="Number of Shares"
                onChange={changeShares}
            />
            <IonButton className="button" onClick={() => {purchaseShares}}>Purchase</IonButton>
        </IonModal>
        </div>

        </>
    );
}

export default Invest;
    