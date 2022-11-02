import Refresh from './static/img/refresh 1.png'

function Button(){
    return(
      <div className="buttons">
        <p className='plus'>+</p>
        <p className='refresh'><img src={Refresh} alt="" /></p>
        <p className='minus'>-</p>
    </div>  
    )
}

export default Button