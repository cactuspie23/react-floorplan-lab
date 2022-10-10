import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"

const Floorplan = (props) => {
  return (
    <>
      <div>
        <Bedroom roomNo={'1'}/>
      </div>
      <div>
        <Bath size={'Full'}/>
      </div>
      <div>
        <Bedroom roomNo={'2'}/>
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bath size={'Half'}/>
      </div>
      <div>
        <Bedroom roomNo={'3'}/>
      </div>
    </>
  )
}

export default Floorplan;