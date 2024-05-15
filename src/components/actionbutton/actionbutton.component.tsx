import './actionbutton.style.css';

export default function Actionbutton({action, text}) {
  return (
    <button 
    className="actionButton" 
    onClick={action}>
      {text}
    </button>)
}