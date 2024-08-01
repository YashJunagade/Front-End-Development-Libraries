function ErrorMsg({ foodItems }) {
  return <>{foodItems.length == 0 && <h1>I'm hungry</h1>}</>;
}

export default ErrorMsg;
