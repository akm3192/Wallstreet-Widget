// filepath: /c:/Users/Ashley/Documents/Wallstreet-Widget/src/components/Company.tsx
import React from 'react';
import './Company.css';
import { Line } from 'react-chartjs-2';
import { IonCard, IonCardContent } from '@ionic/react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CompanyProps {
    abbreviation: string;
    companyName: string;
    stockTrends: Record<string, number[]>;
    current_price: number;
    onClick: () => void;
}

function chartData(stockTrends: Record<string, number[]>) {
    return {
        labels: Array.from({ length: stockTrends["2024"].length }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Stock Trends 2024',
                data: stockTrends["2024"],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };
}

const Company: React.FC<CompanyProps> = ({ abbreviation, companyName, stockTrends, onClick }) => {
    const data = chartData(stockTrends);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Stock Trends for 2024',
            },
        },
    };

    return (
        <>
            <div className="grid-item" onClick={onClick}>{abbreviation}</div>
            <div className="grid-item" onClick={onClick}>{companyName}</div>
            <div className="grid-item" onClick={onClick}>
                        
                            <Line data={data} options={options} />
                        
                   
            </div>
        </>
    );
};

export default Company;