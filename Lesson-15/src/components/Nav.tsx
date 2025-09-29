// <== IMPORTS ==>

// <== PROPS TYPE ==>
type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button
      className="bg-gray-200 rounded-md p-2"
      onClick={() => setViewCart(false)}
    >
      View Products
    </button>
  ) : (
    <button
      className="bg-gray-200 rounded-md p-2"
      onClick={() => setViewCart(true)}
    >
      View Cart
    </button>
  );
  const content = <nav className="nav">{button}</nav>;
  return content;
};

export default Nav;
