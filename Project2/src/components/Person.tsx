import { useState } from "react"

interface Personprops  {
    name: string,
    age: number,
    isMarried: boolean
}

const Person = (props: Personprops) => {
    const [showInfo, setShowInfo] = useState<boolean | null >(false)
    const handleToggle = () =>{
        setShowInfo((prev) => !prev)
    }

    //for event (event: React.ChangeEvent<HTMLInputElement>)
    //for event (event: React.FormEvent<HTMLFormElement>)

  return (
    <div>
        {showInfo && (
            <>
                <h2>Name: {props.name}</h2>
                <h2>Age: {props.age}</h2>
                <h2>This Person {props.isMarried ? "is married" : "is Singles"}</h2>
            </>
        )}
    <button onClick={handleToggle}>Toggle Info</button>
    </div>
  )
}

export default Person
