import './Modal.css'
export default function Modal({turns,handleClose}) {
  return (
    <div className="modal-backdrop">
       <div className="modal">
            <h2>No of turns {turns}</h2>
            <button onClick={handleClose}>Close</button>
       </div>

    </div>
  )
}
