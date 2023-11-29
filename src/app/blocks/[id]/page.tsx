import { json } from "stream/consumers";


export default function BlockShowPage({params：props}){

    return(
        <pre></pre>
       <pre>{JSON.stringify(params)}</pre>
    )
}