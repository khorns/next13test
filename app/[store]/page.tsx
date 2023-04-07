'use client';
import { FC, useState } from "react";
import Button from "../components/button";

// export const metadata = {
//     title: 'Store Page'
// }

interface Props {
    params: {
        store: string
    },

}


// export default function Store ({params} : Props) {
export default function Store ({params} : Props) {
// const Store: FC<Props> = ({params}) => {
    const [count, setCount] = useState(0)

    console.log(params)
    return (
        <div>
            <p>You are visting store {params.store} times</p>
            {/* <button>Testing</button> */}
            <p>{count}</p>
            <Button count={count} setCount={setCount}/>
        </div>
    );
}

// export default Store