import React from "react";
import SearchIcon from "./NavIcons/SearchButtonIcon";

type Props = {
    onChange: (value: string) => void ; 
    onSearch: () => void ;
    value: string ;
};

const SearchBox : React.FC<Props> = ({onChange , onSearch , value}) => {
  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
  };
  return( 
    <div className="flex relative items-center justify-center h-10" >
      <input type="text" value={value} onChange={onHandleChange} placeholder="Search location"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none
        focus:border-blue-500 h-full"/>
          
      <button className="px-4 py-[9px] bg-blue-500 
      text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full"
      onClick={onSearch}>  
        <SearchIcon />
      </button>
    </div>
    );  
};
export default SearchBox;