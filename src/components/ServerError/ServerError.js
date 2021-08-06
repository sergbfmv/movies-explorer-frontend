function ServerError({ message }) {
  const className = `Error ${message ? 'Error_active Error_active_server' : ''}`;
  // const className='Error Error_active'
  return <p className={className}>{message}</p>;
}
export default ServerError;