function Error({ message }) {
  const className = `Error ${message ? 'Error_active' : ''}`;
  // const className='Error Error_active'
  return <p className={className}>{message}</p>;
}
export default Error;