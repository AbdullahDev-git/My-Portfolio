"use client";

import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 my-16">
      {companies.map((company) => (
        <React.Fragment key={company.id}>
          <div className="flex items-center md:max-w-60 max-w-32 gap-6">
            {company.img && (
              <img
                src={company.img}
                alt={company.name}
                className="md:w-16 w-10" 
              />
            )}
            {company.nameImg && (
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 140 : 200} 
                className="md:w-32 w-28" 
              />
            )}
            <p className="text-base md:text-lg font-medium">{company.name}</p> 
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Clients;
