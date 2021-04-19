type SearchBoxTypes = {
  onSearchChange: (value: string) => void;
};

const SearchBox = ({ onSearchChange }: SearchBoxTypes) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search cards...'
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
