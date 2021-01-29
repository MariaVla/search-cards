const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search cards...'
        onChange={(e) => searchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
