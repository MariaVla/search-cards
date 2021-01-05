const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid white',
        height: '600px',
      }}
    >
      {children}
    </div>
  );
};
export default Scroll;
