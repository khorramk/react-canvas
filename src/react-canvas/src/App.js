import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Three from 'three';
import { Geometry } from 'three';

const SceneContext = React.createContext();
const CameraContext = React.createContext();
const BoxContext = React.createContext();
// class Application {
//     constructor(){
//         this.scene = new Three.Scene();

//     }

//     createScene(){
//         this.scene = new Three.Scene();

//     }
// }

class Scene extends Component {
    constructor(){
        this.scene = new Three.Scene();
    }

    add(mesh){
        this.scene.add(mesh);
    }

    render(){
        return (
            <SceneContext.Provider value={{
                addAnimateObject: (mesh)=> this.add(mesh)
            }}>
                {this.props.children}
            </SceneContext.Provider>
        )
    }
}

class Camera extends Component{
    render(){
        return (
            <CameraContext.Provider/>
        )
    }
}

class Box extends Component{
    render(){
        const geom = new Three.BoxGeometry(this.props.width, this.props.height, this.props.depth);
        const Material = new Three.MeshBasicMaterial(this.props.material);
        const mesh = new Three.Mesh(geom, Material);
        return <BoxContext.Provider value={{
            mesh:mesh
        }}>
            {this.props.children}
        </BoxContext.Provider>
    }
}

class Consumer extends Component{
    constructor(){
        this.state = {
            updateContext: {}
        }
    }
    componentDidMount(){
        this.three_renderer = new Three.WebGLRenderer();
        this.three_renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(this.renderer.domElement);

        this.renderScene();
        this.start();
    }

    renderScene(){

    }

    start(){

    }

    stop(){

    }
    animate(){
        
    }


    updateScene(mesh, callback){
        return callback(mesh)
    }

    render(){
        return (
            <SceneContext.Consumer>
                {/* {(context)=> context.addAnimateObject()}
                <div ref={(mount)=> this.mount = mount}/> */}
                {scene => (
                    <BoxContext.Consumer>
                        {box => {
                            this.updateScene(box.mesh, scene.addAnimateObject)
                            return (
                                <div ref={(mount)=> this.mount = mount}/>
                            )
                        }}
                    </BoxContext.Consumer>
                )}
            </SceneContext.Consumer>
        )
    }
}
class App extends Component {
    
    render(){
        return (
            <Scene>
                <Camera />
                    <Box>
                        <Consumer/>
                    </Box>
                <Camera/>
            </Scene>
        )
    }
}