import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

function Loading() {
    const circleRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        // Rotate the circle continuously
        gsap.to(circleRef.current, {
            rotation: 360,
            repeat: -1,
            duration: 1,
            ease: "none",
        })

        // Fade in the "Loading..." text
        gsap.from(textRef.current, {
            opacity: 0,
            duration: 1,
        })
    }, [])

    return (
        <div className='loading-container'>
            <div className='circle' ref={circleRef}></div>
            <div className='loading-text' ref={textRef}>
                Loading...
            </div>
        </div>
    )
}

export default Loading
