export default function Alert({ type, children }) {


  console.log(type, children);

  return (
    <div className={`alert ${type || 'info'}`}>
      {children || 'This is an alert'}
    </div>
  )
}