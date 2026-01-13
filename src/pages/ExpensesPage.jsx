import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseCard from '../components/Fragments/ExpenseCard';
import Icon from '../components/Elements/Icon';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dummyTransactions = [
    { name: "Bill Payment", price: 120, date: "17 May 2023" },
    { name: "Service Fee", price: 20, date: "18 May 2023" },
  ];

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      
      const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/expenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const dataAPI = response.data.data || response.data || [];
      
      const processedData = dataAPI.map(item => ({
        ...item,transactions: (item.transactions && item.transactions.length > 0) 
        ? item.transactions : dummyTransactions
      }));

      setExpenses(processedData);
      
    } catch (error) {
      console.error("Error fetching expenses:", error);
      setExpenses([]); 
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getIconByCategory = (categoryName) => {
    const lowerName = categoryName ? categoryName.toLowerCase() : 'others';
    switch (lowerName) {
      case 'housing': return <Icon.Home size={22} />;
      case 'food': return <Icon.Food size={22} />;
      case 'transportation': return <Icon.Transport size={22} />;
      case 'entertainment': return <Icon.Film size={22} />;
      case 'shopping': return <Icon.Shopping size={22} />;
      case 'others': return <Icon.Others size={22} />;
      default: return <Icon.Others size={22} />;
    }
  };

  return (
    <div className="w-full"> 
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-02">Expenses Comparison</h1>
      </div>

      {isLoading ? (
        <div className="flex h-96 w-full items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary"></div>
                <span className="text-sm font-semibold text-gray-500">Loading Data...</span>
            </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenses && expenses.length > 0 ? (
            expenses.map((data) => (
              <ExpenseCard 
                key={data.id}
                category={data.category || "Unknown"} 
                amount={data.amount || data.balance || 0}
                percentage={data.percentage || 0}
                trend={data.trend || 'down'}
                icon={getIconByCategory(data.category)}s
                transactions={data.transactions} 
              />
            ))
          ) : (
             <div className="col-span-3 text-center text-gray-400 py-10">
               Tidak ada data expense ditemukan.
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpensesPage;