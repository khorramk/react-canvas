import React, {  createContext } from 'react';
const Cameracontext = createContext({})

const Camera = (props) => {
    const {z, fov, aspect, far, near} = props
    return (
        <Cameracontext.Provider value={{
            z,
            fov,
            aspect,
            far,
            near
        }}>
                {props.children}
        </Cameracontext.Provider>
    )
}

export {Cameracontext, Camera};