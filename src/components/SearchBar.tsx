interface SearchBarProps {
	searchedName: string;
	setSearchedName: (prevSearchedName: string) => void;
}

const SearchBar = ({ searchedName, setSearchedName }: SearchBarProps) => {
	const handleOncChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		return setSearchedName(event.target.value);
	};

	return (
		<input
			type="text"
			placeholder="Search by recipe name"
			value={searchedName}
			onChange={handleOncChange}
			className="search-bar"
		/>
	);
};

export default SearchBar;
