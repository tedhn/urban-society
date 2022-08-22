import React, { useState } from "react";
import { ShoeDataContextType } from "../../custom";

import Airtable from "airtable";
import axios from "axios";

interface propTypes {
	children: React.ReactNode;
}

export const ShoeDataContext = React.createContext<ShoeDataContextType | null>(
	null
);

const ShoeDataContextProvider: React.FC<propTypes> = ({ children }) => {
	var base = new Airtable({ apiKey: "key52VybAAm5VmPUq" }).base(
		"appyXjs9GFlICHIp0"
	);

	const base2 = new Airtable({ apiKey: "key52VybAAm5VmPUq" }).base(
		"appyXjs9GFlICHIp0"
	);

	const getCategory = async (id: number) => {
		const { data } = await axios.get(
			"https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes?&view=Grid%20view",
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return data.records.slice(id * 20, id * 20 + 20);

		// base("Shoes")
		// 	.select({
		// 		pageSize: 20,
		// 		view: "Grid view",
		// 		filterByFormula: `{id} >= ${category} * 20`,
		// 	})
		// 	.firstPage(function (err, records) {
		// 		if (err) {
		// 			console.error(err);
		// 			return;
		// 		}

		//     console.log(records)
		// 		return records
		// 	});
	};

	const getShoe = async (id: string) => {
		const { data } = await axios.get(
			`https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes/${id}`,
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return  data.fields ;
	};

	const getImages = async (id: number) => {
		const { data } = await axios.get(
			`https://api.airtable.com/v0/appyXjs9GFlICHIp0/Images?&view=Grid%20view`,
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return data.records.filter((data: any) => data.fields.id == id);
	};

  const searchShoe = async (query : string) => {
    		const { data } = await axios.get(
					"https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes?&view=Grid%20view",
					{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
				);


        return data.records.filter((shoe : any)=>{
          console.log(shoe)

          return shoe.fields.name.toLowerCase().includes(query);
        })
  }

	return (
		<ShoeDataContext.Provider
			value={{ getCategory, getShoe, getImages, searchShoe }}>
			{children}
		</ShoeDataContext.Provider>
	);
};

export default ShoeDataContextProvider;
