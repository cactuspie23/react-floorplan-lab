import Bedroom from "./Bedroom"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"
import Kitchen from "./Kitchen"

const Floorplan = (props) => {
  return (
    <>
      <div>
        <Bedroom roomNo={'1'}/>
      </div>
      <div>
        <Kitchen />
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