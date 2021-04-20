// This means that what comes as props have to be a JSX element.
type Props = {
  children?: JSX.Element;
};

const Scroll = ({ children }: Props) => {
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
