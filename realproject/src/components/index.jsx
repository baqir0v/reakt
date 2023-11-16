import "./style.scss"
import axios from "axios"
import { useEffect,useState } from "react"

function Card() {
    const [data, setData] = useState([])
    useEffect(() => {
        const baseUrl = "  http://localhost:3000/posts"

        const fetchData = async function () {
            try {
                
                const response = await axios.get(`${baseUrl}`)
                setData(response.data)

            } catch (error) {
                console.log("error verdi qaqa");
            }
        };
        fetchData()
        console.log(data);
    }, [])



    return (
        
        <div className="card">
            {data && data.map((item)=>
                <ul className="uls" key={item.id}>
                    <li ><img className="imgs" src={item.img} alt="" /></li>
                    <li>{item.id}</li>
                    <li>{item.class}</li>
                    <li>{item.name}</li>
                    <li>{item.color}</li>
                    <li>{item.price}$</li>
                    
                </ul>
            )}
        </div>
    )
}

export default Card