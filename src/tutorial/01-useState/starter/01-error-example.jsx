const ErrorExample = () => {
  const handleClick = () => {
    console.log("im clicked");
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
      <h2>useState error example</h2>
    </>
  );
};

export default ErrorExample;
