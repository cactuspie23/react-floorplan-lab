import Sink from "./Sink"
import Oven from "./Oven"

const Kitchen = (props) => {
  return (
    <>
      <h2>Kitchen</h2>
      <div>
        <Oven />
      </div>
      <div>
        <Sink />
      </div>
    </>
  );
}

export default Kitchen;