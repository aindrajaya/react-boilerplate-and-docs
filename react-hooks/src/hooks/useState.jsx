import React, {useState} from 'react'
import './index.css'

const CartItem = ({name, quantity, add, remove}) => {
  return(
    <div className="CartItemUseState">
      <span className="CartItemUseState__label">{`${name}`}</span>
      <div>
        <button className="CartItemUseState__btn" onClick={remove}>
          -
        </button>
        <input className="CartItemUseState__input" value={quantity} readOnly/>
        <button className="CartItemUseState__btn" onClick={add}>
          +
        </button>
      </div>
    </div>
  )
}

const Cart = () => {
  const [bananas, setBananas] = useState(0)
  const [grapes, setGrapes] = useState(0)

  return(
    <div className="CartUseState">
      <CartItem 
        name="Banana"
        quantity={bananas}
        add={() => setBananas(bananas + 1)}
        remove={() => {
          if(bananas >= 1){
            setBananas(bananas - 1)
          }
        }}
      />
       <CartItem 
        name="Grapes"
        quantity={grapes}
        add={() => setGrapes(grapes + 1)}
        remove={() => {
          if(grapes >= 1){
            setGrapes(grapes - 1)
          }
        }}
      />
      <section className="CartUseState__total">
          <span className="CartUseState__total-label">Total</span>
          <span className="CartUseState__total-label">{0}</span>
      </section>
    </div>
  )
}

//the component shopping cart
export default function useStateCart() {
  return (
    <div className="AppUseState">
      <header className="AppUseState__header">
        <p>useState</p>
      </header>
      <main>
        <Cart />
      </main>
    </div>
  )
}
