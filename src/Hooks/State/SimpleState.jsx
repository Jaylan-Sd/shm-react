function SimpleState () {
    let clicked = 0;
    const increment = () => {
        clicked = clicked + 1;
        console.log(increment);
    }

    return <div>
        <div>
            <button onClick={increment}>Click Me</button>
        </div>
        <h3>Clicked {clicked}</h3>
    </div>
}

export default SimpleState;