import Refresh from './static/img/refresh 1.png'

function Button(props){

  function plus(){
    props.setCounter(props.counter + 3)
}

function minus(){
  
  if(props.counter > 0,
     props.counter > 1){
    props.setCounter(props.counter - 2)
  }  
}

function reset(){
    props.setCounter(0)
}

    return(
      <div className="buttons">
        <p className='plus' onClick={plus}>+</p>
        <p className='refresh' onClick={reset}><img src={Refresh} alt="" /></p>
        <p className='minus' onClick={minus}>-</p>
    </div>  
    )
}

export default Button