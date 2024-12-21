import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'

export function createSpaceship(scene,state){
    let gltfLoader = new GLTFLoader()
    gltfLoader.load('src/models/spaceship/scene.gltf',(gltf)=>{
      state.spaceship = gltf.scene
      state.spaceship.scale.set(0.45,0.45,0.45)
      state.spaceship.position.y = -0.5
      if (window.innerWidth <= 992)
        state.spaceship.scale.set(0.2,0.2,0.2)
      scene.add(state.spaceship)
      },
      (xhr)=>{
        console.log((xhr.loaded / xhr.total * 100) + "% loaded")
      },
        (error)=>{
          console.log(error)
        }
      )
}