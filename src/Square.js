import './Square.css';
function Square(props, {value})
{
  const classes = props.className ? `${props.className} square` : 'square';
  return (
    <span className={classes} onClick= { props.onClick}>{props.state} </span>
  )
}
export default Square;