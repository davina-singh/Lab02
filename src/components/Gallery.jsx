import HornedBeast from "./HornedBeast";
import data from "../assets/data.json";

export default function Gallery() {
    console.log('Hello')
    console.log(data)
    return (
        <div>
            {data.map((beast) => {
                return (
                    <HornedBeast 
                        key={beast._id}
                        title={beast.title}
                        image_url={beast.image_url} 
                        description={beast.description} 
                    />
                );
            })}
         </div>
    );
}
