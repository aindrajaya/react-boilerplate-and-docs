//functional component
export const Button = ({action, title}) => {
  return(
    // <button onClick={props.click} className="w-100 btn btn-lg btn-primary" type="submit">{props.title}</button>
    <button onClick={action}>{title}</button>
  )
}