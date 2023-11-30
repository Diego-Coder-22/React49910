import cartLogo from '../../assets/cartLogo.svg'
// import './CartCounter.scss'

const CartCounter = ({items}) => {

    return (
        <>
            <img src={cartLogo} alt="Logo" className='h-10 w-10'/>
            <span>
                {items.length}
            </span>
        </>
    )
}

export default CartCounter