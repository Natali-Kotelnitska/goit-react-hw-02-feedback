// Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
const FeedbackOptions = props => {
  console.log(props);
  //   const { good, neutral, bad } = props;
  //   console.log(good);
  return (
    // <div className="container">
    //   {props.map(prop => (
    //     <button id={prop} type="button">
    //       {prop}
    //     </button>
    //   ))}
    // </div>
    <div className="container">
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
    </div>
  );
};
export default FeedbackOptions;
