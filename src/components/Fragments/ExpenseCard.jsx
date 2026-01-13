import React from 'react';
import CardExpen from '../Elements/CardExpen'; 
import Icon from '../Elements/Icon';

const ExpenseCard = ({ 
  icon, 
  category, 
  amount, 
  percentage, 
  trend, 
  transactions = [] 
}) => {
  const isTrendUp = trend === 'up';
  const trendColor = isTrendUp ? 'text-red-500' : 'text-emerald-500';
  const ArrowIcon = isTrendUp ? Icon.ArrowUp : Icon.ArrowDown;

  return (
    <CardExpen>
      {/* --- Header Card --- */}
      <div className="p-3 flex justify-between items-start pb-4 border-b border-gray-100 mb-4">
        <div className="flex gap-4 items-center">
          {/* Kotak Icon Abu-abu */}
          <div className="p-3 bg-gray-50 rounded-xl text-gray-500">
            {icon}
          </div>
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-1 capitalize">{category}</h3>
            {/* Format Currency */}
            <span className="text-xl font-bold text-gray-800">
              ${amount.toLocaleString('en-US')}
            </span>
          </div>
        </div>
        
        {/* Bagian Persentase & Trend */}
        <div className="flex flex-col items-end">
            <div className={`flex items-center gap-1 text-sm font-bold text-gray-400 `}>
                <span>{percentage}%</span>
                <ArrowIcon className={trendColor} size={16} />
            </div>
            <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">Compare to last month</span>
        </div>
      </div>

      {/* --- List Transaksi --- */}
      <div className="bg-white flex flex-col gap-3 p-4 ">
        {transactions && transactions.length > 0 ? (
            transactions.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200  ">
                <span className="text-gray-700 font-semibold text-sm">
                  {item.name}
                </span>
                
                <div className="text-right">
                  <div className="text-gray-800 font-bold text-sm mb-0.5">
                    ${item.price}
                  </div>
                  <div className="text-gray-400 text-xs font-medium">
                    {item.date}
                  </div>
                </div>
              </div>
            ))
        ) : (
            <div className="text-center text-gray-300 text-xs py-2">No recent transactions</div>
        )}
      </div>
    </CardExpen>
  );
};

export default ExpenseCard;