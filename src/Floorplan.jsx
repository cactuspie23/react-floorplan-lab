import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"

const Floorplan = (props) => {
  return (
    <>
      <div>
        <Bedroom roomNo={'1'}/>
      </div>
      <div>
        <Bedroom roomNo={'2'}/>
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bedroom roomNo={'3'}/>
      </div>
    </>
  )
}

export default Floorplan;