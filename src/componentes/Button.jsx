const getLabel = label => {
    alert(`A label desse botão é ${label}`)
  }

const Button = ({ label, getLabel }) => <button onClick={() => getLabel(label)}>{label}</button>

export { getLabel, Button }