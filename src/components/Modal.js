const Modal = (props) => {
  return (
    <div>
      <div class="w-full h-full bg-black opacity-50 absolute top-0" onClick={() => props.onClickBackground(false)}>
      </div>
      <div class="absolute left-1/4 top-1/4 w-6/12 h-8/12 opacity-100 rounded bg-gray-200">
        {props.jsxContent}
      </div>
    </div>
  )
}

export default Modal;