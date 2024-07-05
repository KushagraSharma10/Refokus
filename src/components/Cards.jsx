import Card from "./Card"


const Cards = () => {
  return (
    <div className="w-full">
        <div className="w-full  py-32 px-20 flex gap-1">
        <Card width = {"basis-1/3"} start = {false} para= {true} />
        <Card width = {"basis-2/3"} start = {true} para = {false} hover = "true"/>
        </div>
    </div>
  )
}

export default Cards