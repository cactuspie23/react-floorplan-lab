import Bedroom from "./Bedroom"

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
      <Bedroom roomNo={'3'}/>
    </div>
    </>
  )
}

export default Floorplan;