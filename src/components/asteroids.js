import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import { generateRandomValues } from '../functions/generateRandomValues'
export function createAsteroids(scene,state)
{
        let gltfLoader = new GLTFLoader()
        gltfLoader.load("src/models/asteroid_1/scene.gltf",gltf=>{
            let asteroid = gltf.scene
            let maxSize = 0.8
            let minSize = 0.1
            let randomSize = Math.random() * (maxSize - minSize) + minSize
            let randomValues = generateRandomValues()
            asteroid.scale.set(randomSize,randomSize,randomSize)
            asteroid.position.x = randomValues.randomX
            asteroid.position.y = randomValues.randomY
            asteroid.speed = randomValues.randomSpeed
            asteroid.position.z = -200
            state.asteroids.push(asteroid)
            scene.add(asteroid)
        },
        xhr=>{
            state.loading = {...state.loading, total : (state.loading.total  + xhr.loaded / xhr.total)}
        },
        error=>{console.log(error)}
        )

        gltfLoader.load("src/models/asteroid_2/scene.gltf",gltf=>{
            let asteroid = gltf.scene
            let maxSize = 0.8
            let minSize = 0.1
            let randomSize = Math.random() * (maxSize - minSize) + minSize
            let randomValues = generateRandomValues()
            asteroid.scale.set(randomSize,randomSize,randomSize)
            asteroid.position.x = randomValues.randomX
            asteroid.position.y = randomValues.randomY
            asteroid.speed = randomValues.randomSpeed
            asteroid.position.z = -300
            state.asteroids.push(asteroid)
            scene.add(asteroid)
        },
        xhr=>{
            state.loading = {...state.loading, total : (state.loading.total  + xhr.loaded / xhr.total)}
        },
        error=>{console.log(error)}
    )

    gltfLoader.load("src/models/asteroid_3/scene.gltf",gltf=>{
        let asteroid = gltf.scene
        let maxSize = 0.8
        let minSize = 0.1
        let randomSize = Math.random() * (maxSize - minSize) + minSize
        let randomValues = generateRandomValues()
        asteroid.type = 3
        asteroid.scale.set(randomSize*15,randomSize*15,randomSize*15)
        asteroid.position.x = randomValues.randomX
        asteroid.position.y = randomValues.randomY
        asteroid.speed = randomValues.randomSpeed
        asteroid.position.z = -300
        state.asteroids.push(asteroid)
        scene.add(asteroid)
    },
    xhr=>{
        state.loading = {...state.loading, total : (state.loading.total  + xhr.loaded / xhr.total)}
    },
    error=>{console.log(error)}
    )
    }


