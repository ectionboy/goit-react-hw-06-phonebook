import { useDispatch } from "react-redux";
import { filter } from "redux/contacts/slice";

export const App = () => {
 
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(filter(value));
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      <input type="text" onChange={value => handleFilter(value.target.value)}/>
    </div>
    
  );
};
