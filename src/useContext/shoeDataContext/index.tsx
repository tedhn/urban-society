import React from "react";
import { RecordType, ShoeDataContextType } from "../../../custom";

import axios from "axios";

interface propTypes {
	children: React.ReactNode;
}

export const ShoeDataContext = React.createContext<ShoeDataContextType | null>(
	null
);

const ShoeDataContextProvider: React.FC<propTypes> = ({ children }) => {
	const getCategory = async (id: number) => {
		const { data } = await axios.get(
			"https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes?&view=Grid%20view",
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return data.records.slice(id * 20, id * 20 + 20);
	};

	const getShoe = async (id: string) => {
		const { data } = await axios.get(
			`https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes/${id}`,
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return data.fields;
	};

	const getImages = async (id: number) => {
		const { data } = await axios.get(
			`https://api.airtable.com/v0/appyXjs9GFlICHIp0/Images?&view=Grid%20view`,
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return data.records.filter((record: RecordType) => record.fields.id == id);
	};

	const searchShoe = async (query: string) => {
		const { data } = await axios.get(
			"https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes?Grid%20view",
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		return data.records.filter((record: RecordType) => {
			return record.fields.name.toLowerCase().includes(query);
		});
	};

	const getRandomShoes = async (total: number) => {
		let randomIdArr: Array<number> = [];

		while (randomIdArr.length < total) {
			const random = Math.floor(Math.random() * 60);

			if (!randomIdArr.includes(random)) {
				randomIdArr.push(random);
			}
		}

		const { data } = await axios.get(
			"https://api.airtable.com/v0/appyXjs9GFlICHIp0/Shoes?maxRecords=60&view=Grid%20view",
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);
		const randomShoes = randomIdArr.map((id) =>
			data.records.filter((record: RecordType) => record.fields.id === id)
		);
		return randomShoes.flat();
	};

	const getCategoryDetails = async (category: string = "") => {
		let id = 0;

		if (category === "women") {
			id = 1;
		} else if (category === "men") {
			id = 2;
		} else if (category === "kids") {
			id = 3;
		}

		const { data } = await axios.get(
			"https://api.airtable.com/v0/appyXjs9GFlICHIp0/Categories?maxRecords=3&view=Grid%20view",
			{ headers: { Authorization: "Bearer key52VybAAm5VmPUq" } }
		);

		if (id === 0) {
			return data.records;
		}

		return data.records.filter(
			(record: RecordType) => record.fields.id === id
		)[0].fields;
	};

	return (
		<ShoeDataContext.Provider
			value={{
				getCategory,
				getShoe,
				getImages,
				searchShoe,
				getRandomShoes,
				getCategoryDetails,
			}}>
			{children}
		</ShoeDataContext.Provider>
	);
};

export default ShoeDataContextProvider;
