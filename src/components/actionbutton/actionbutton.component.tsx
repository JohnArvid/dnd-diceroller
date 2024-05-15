import './actionbutton.styles.css';

interface buttonProps {
  action: React.MouseEventHandler;
  text: string;
}

export default function Actionbutton(buttonProps: buttonProps) {
  return (
    <button 
    className="actionButton" 
    onClick={buttonProps.action}>
      {buttonProps.text}
    </button>)
}