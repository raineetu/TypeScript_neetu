interface Personprops  {
    name: string,
    age: number,
    isMarried: boolean
}

const Person = (props: Personprops) => {
  return (
    <div>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>This Person {props.isMarried ? "is married" : "is Singles"}</h2>
    </div>
  )
}

export default Person
