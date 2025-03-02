import React, { useState } from 'react';
import './Dashboard.css';
import { IonTitle } from '@ionic/react';
import companies from '../companies.json';
import Company from './Company';

function Invest() {

    return (
        <>
        <br></br>
        <IonTitle size="large">Invest</IonTitle>
        <br></br>

        {
            companies.map((company, index) => (
                <Company
                    key={index}
                    abbreviation={company.abbreviation}
                    companyName={company.company_name}
                    stockTrends={company.stock_trends}
                    onClick={() => {}}/>
            ))
        }

        </>
    );
}

export default Invest;
    