import React, {useState, useEffect} from 'react'

function WindowUpdater(){

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)


    useEffect(() => {
        window.addEventListener("resize", lidarResize)
        console.log("event listener added")

        return () => {
            window.removeEventListener("resize", lidarResize)
            console.log("event listener removed")
        }
    }, [])

    useEffect(() => {
        document.title = `Size ${width} x ${height}`
    }, [width, height])


    function lidarResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
    <>
        <p>window width {width}</p>
        <p>window height {height}</p>
    </>
    )
}

export default WindowUpdater