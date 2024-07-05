import Button from "./Button"


const Product = ({val,mover, count}) => {
  return (
    <div className="w-full py-20 text-white">
        <div onMouseEnter={()=> {mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="text-6xl capitalize">{val.title}</h1>
            <div className="dets w-1/3 ">
                <p className="mb-10 text-[1.3vw]">{val.description}</p>
                <Button title="Live Website" />
            </div>
        </div>
    </div>  
  )


}

export default Product