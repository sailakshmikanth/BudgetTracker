import React, { useState, useEffect } from 'react';
import 'boxicons';
import { default as api } from '../store/apiSlice';
import Poppers from './Poppers'; // Import Poppers component

export default function List() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
    const [deleteTransaction] = api.useDeleteTransactionMutation();
    const [salaryAmount, setSalaryAmount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [showPoppers, setShowPoppers] = useState(false);
    const [transactionMade, setTransactionMade] = useState(false);

    // Function to handle deletion of a transaction
    const handlerClick = (e) => {
        if (!e.target.dataset.id) return;
        deleteTransaction({ _id: e.target.dataset.id });
    };

    // Function to handle making a transaction
    const handleMakeTransaction = () => {
        // Simulate adding a new savings transaction (e.g., 1000)
        const newTransaction = {
            amount: "1000", // Adjust this amount as needed
            type: "savings",
        };

        // Update the salaryAmount immediately to reflect the new transaction
        setSalaryAmount((prevSalary) => {
            const updatedSalary = prevSalary + parseFloat(newTransaction.amount);

            // Check if the updated salary exceeds 5000
            if (updatedSalary > 5000) {
                setShowMessage(true); // Show congratulatory message
                setShowPoppers(true); // Show flying poppers

                // Hide the message and poppers after 5 seconds
                setTimeout(() => {
                    setShowMessage(false);
                    setShowPoppers(false);
                }, 5000);
            }

            // Return the updated salary
            return updatedSalary; 
        });
    };

    // Calculate total salary whenever data changes
    useEffect(() => {
        if (isSuccess && data) {
            const salaryTransactions = data.filter(
                (transaction) => transaction.type === 'savings'
            );

            const totalSalary = salaryTransactions.reduce(
                (sum, transaction) => sum + (parseFloat(transaction.amount) || 0),
                0
            );

            setSalaryAmount(totalSalary);
        }
    }, [data, isSuccess]); // Removed transactionMade from dependencies

    let Transactions;

    if (isFetching) {
        Transactions = <div>Fetching</div>;
    } else if (isSuccess) {
        Transactions = data.map((v, i) => (
            <Transaction key={i} category={v} handler={handlerClick}></Transaction>
        ));
    } else if (isError) {
        Transactions = <div>Error</div>;
    }

    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            
            {/* Popup Message */}
            {showMessage && (
                <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
                    <div className="congrats-message">🎉 Congratulations! 🎉<br />Your savings have crossed 5000!</div>
                </div>
            )}

            {/* Show flying poppers */}
            {showPoppers && <Poppers />}

            {Transactions}

            {/* Button to make a transaction */}
            <button onClick={handleMakeTransaction}>Make Transaction</button>
        </div>
    );
}

function Transaction({ category, handler }) {
    if (!category) return null;
    return (
        <div
            className="item flex justify-center bg-gray-50 py-2 rounded-r"
            style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
        >
            <button className="px-3" onClick={handler}>
                <box-icon
                    data-id={category._id ?? ''}
                    color={category.color ?? "#e5e5e5"}
                    size="15px"
                    name="trash"
                ></box-icon>
            </button>
            <span className="block w-full text-black">{category.name ?? ''}</span>
        </div>
    );
}
