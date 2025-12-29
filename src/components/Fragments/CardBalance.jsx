import React from "react";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import { Link } from "react-router-dom";
import Icon from "../Elements/Icon";

function CardBalance(props) {
  const { data } = props;

  return (
    <>
      <Card
        title="Total Balance"
        desc={
          <DotsMobileStepper
            data={data.map((item) => (
              <div key={item.id} className="p-2">
                {/* Bagian Atas: Saldo dan Link */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">${item.balance}</div>
                  <div>
                    <Link to="/balance" className="text-sm text-gray-500 hover:underline">
                      All account
                    </Link>
                  </div>
                </div>

                {/* Garis Pemisah */}
                <div className="border-b-1 border-gray-05 my-4"></div>

                {/* Bagian Kartu Visual */}
                <div className="flex justify-between bg-primary text-white p-4 rounded-md">
                  <div>
                    <p className="text-xs opacity-80">Account Type</p>
                    <span className="text-xl font-bold">{item.accountType}</span>
                    <br />
                    <span className="text-sm font-light">{item.accountNumber}</span>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    {/* Logo Bank/Akun */}
                    <div className="text-transparent">{item.logo}</div>
                    
                    <div className="flex items-center">
                      <span className="text-xl font-bold me-2">
                        ${item.balance}
                      </span>
                      <div className="bg-white text-primary rounded-full p-0.5">
                        <Icon.ArrowUpRight width={18} height={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          />
        }
      />
    </>
  );
}

export default CardBalance;