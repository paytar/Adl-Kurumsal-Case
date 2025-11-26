import SearchIcon from "@mui/icons-material/Search";

const Filter = () => {
  return (
    <div className="flex items-center w-full bg-gray-100 px-4 py-2 rounded-full">
      <SearchIcon fontSize="small" className="text-gray-600" />
      <input
        type="text"
        placeholder="Search for products..."
        className="bg-transparent w-full ml-2 outline-none text-sm"
      />
    </div>
  );
};

export default Filter;
