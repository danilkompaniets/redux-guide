import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  return (
    <div className="app">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Add</button>
        <button onClick={() => getCash(Number(prompt()))}>Remove</button>
        <button onClick={() => addCustomer(String(prompt()))}>
          Add Client
        </button>
      </div>
      <div>
        {customers.length > 0 ? (
          customers.map((customer) => (
            <div key={customer.id}>
              {customer.name}
              <button onClick={() => removeCustomer(customer.id)}>
                Remove Client
              </button>
            </div>
          ))
        ) : (
          <div>No clients</div>
        )}
      </div>
    </div>
  );
}

export default App;
