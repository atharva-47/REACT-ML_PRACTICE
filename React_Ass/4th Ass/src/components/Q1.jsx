import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart } from '../store/cartSlice'

function Q1() {
  const { items, total } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Mouse', price: 49 }
  ]

  return (
    <div>
      <h2>Q1: Cart</h2>
      
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch(addItem(product))}>Add</button>
        </div>
      ))}

      {items.map(item => (
        <div key={item.id}>
          <span>{item.name} x{item.quantity} = ${item.price * item.quantity}</span>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      
      <p>Total: ${total}</p>
      <button onClick={() => dispatch(clearCart())}>Clear</button>
    </div>
  )
}

export default Q1