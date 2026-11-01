import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

// [ ENCHANTING ROOM ] //

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const cameraControl = new OrbitControls(camera, renderer.domElement);



// Textures
const BookShelfTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Book Shelf.jpg");
const BambooPlankTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Bamboo Plank.jpg");
const BirchPlankTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Birch Plank.jpg");
const OakPlankTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Oak Plank.jpg");
const EndCrystalTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft End Crystal.webp");
const EnderCrystalTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Ender Crystal.webp");
const BeaconTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Beacon.webp");
const PumpkinTexture = new THREE.TextureLoader().load("./assets/textures/Minecraft Pumpkin.png");
const SkullPainting1Texture = new THREE.TextureLoader().load("./assets/textures/Minecraft Skull Painting 1.jpg");
const SkullPainting2Texture = new THREE.TextureLoader().load("./assets/textures/Minecraft Skull Painting 2.jpg");



// Camera
camera.position.z = 5.5
camera.position.y = 1.5
camera.position.x = 5.5

// Background
scene.background=new THREE.Color(0x00ddff)
scene.background=new THREE.TextureLoader().load("./assets/textures/Sky.avif");



// LIGHTINGS //
const directionalLight = new THREE.DirectionalLight(0xdec487, 5);
scene.add(directionalLight);

const pointLightSouth = new THREE.PointLight(0xf5b158, 1, 0);
pointLightSouth.position.set(0, 0, 300);
scene.add(pointLightSouth);

const light = new THREE.AmbientLight( 0x404040 );
scene.add( light );



// LIST OF MATERIALS USED //

// MeshBasicMaterial //
// MeshLambertMaterial //
// MeshPhongMaterial //



//--------------------------------------------------------------------------------------------//
// PILLAR ONE //
const endercrystalgeometry = new THREE.BoxGeometry( 1, 1, 1 );
const endercrystalmaterial = new THREE.MeshPhongMaterial( { map: EnderCrystalTexture } );
const endercrystalcube = new THREE.Mesh( endercrystalgeometry, endercrystalmaterial );
endercrystalcube.position.set(0, 2.5, 0);
scene.add( endercrystalcube );

const beacongeometry = new THREE.BoxGeometry( 1, 1, 1 );
const beaconmaterial = new THREE.MeshPhongMaterial( { map: BeaconTexture } );
const beaconcube = new THREE.Mesh( beacongeometry, beaconmaterial );
beaconcube.position.set(0, 1, 0);
scene.add( beaconcube );

const book1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const book1material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const book1cube = new THREE.Mesh( book1geometry, book1material );
book1cube.position.set(0, 0, 0);
scene.add( book1cube );

const birch1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const birch1material = new THREE.MeshPhongMaterial( { map: BirchPlankTexture } );
const birch1cube = new THREE.Mesh( birch1geometry, birch1material );
birch1cube.position.set(0, -1, 0);
scene.add( birch1cube );
//--------------------------------------------------------------------------------------------//

// PILLAR TWO //
const endcrystal1o1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const endcrystal1o1material = new THREE.MeshLambertMaterial( { map: EndCrystalTexture } );
const endcrystal1o1cube = new THREE.Mesh( endcrystal1o1geometry, endcrystal1o1material );
endcrystal1o1cube.position.set(-2, 0.5, 2);
scene.add( endcrystal1o1cube );

const endcrystal1o2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const endcrystal1o2material = new THREE.MeshLambertMaterial( { map: EndCrystalTexture } );
const endcrystal1o2cube = new THREE.Mesh( endcrystal1o2geometry, endcrystal1o2material );
endcrystal1o2cube.position.set(-2, 0.5, 2);
scene.add( endcrystal1o2cube );

const book2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const book2material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const book2cube = new THREE.Mesh( book2geometry, book2material );
book2cube.position.set(-2, -1, 2);
scene.add( book2cube );
//--------------------------------------------------------------------------------------------//

// PILLAR THREE //
const endcrystal2o1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const endcrystal2o1material = new THREE.MeshLambertMaterial( { map: EndCrystalTexture } );
const endcrystal2o1cube = new THREE.Mesh( endcrystal2o1geometry, endcrystal2o1material );
endcrystal2o1cube.position.set(2, 0.5, -2);
scene.add( endcrystal2o1cube );

const endcrystal2o2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const endcrystal2o2material = new THREE.MeshLambertMaterial( { map: EndCrystalTexture } );
const endcrystal2o2cube = new THREE.Mesh( endcrystal2o2geometry, endcrystal2o2material );
endcrystal2o2cube.position.set(2, 0.5, -2);
scene.add( endcrystal2o2cube );

const book3geometry = new THREE.BoxGeometry( 1, 1, 1 );
const book3material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const book3cube = new THREE.Mesh( book3geometry, book3material );
book3cube.position.set(2, -1, -2);
scene.add( book3cube );
//--------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------//
// FLOOR, WALL AND CEILING //
const bambooceilinggeometry = new THREE.PlaneGeometry( 15, 15 );
const bambooceilingmaterial = new THREE.MeshPhongMaterial( { map: BambooPlankTexture, side: THREE.DoubleSide } );
const bambooceilingplane = new THREE.Mesh( bambooceilinggeometry, bambooceilingmaterial );
bambooceilingplane.position.set(0, 7.5, 0);
bambooceilingplane.rotation.set(1.57, 0, 0);
scene.add( bambooceilingplane );

const oakfloorgeometry = new THREE.PlaneGeometry( 15, 15 );
const oakfloormaterial = new THREE.MeshBasicMaterial( { map: OakPlankTexture, side: THREE.DoubleSide } );
const oakfloorplane = new THREE.Mesh( oakfloorgeometry, oakfloormaterial );
oakfloorplane.position.set(0, -1.5, 0);
oakfloorplane.rotation.set(1.57, 0, 0);
scene.add( oakfloorplane );

const birchwallLgeometry = new THREE.PlaneGeometry( 15, 9 );
const birchwallLmaterial = new THREE.MeshPhongMaterial( { map: BirchPlankTexture, side: THREE.DoubleSide } );
const birchwallLplane = new THREE.Mesh( birchwallLgeometry, birchwallLmaterial );
birchwallLplane.position.set(-7.5, 3, 0);
birchwallLplane.rotation.set(0, 1.57, 0);
scene.add( birchwallLplane );

const birchwallRgeometry = new THREE.PlaneGeometry( 15, 9 );
const birchwallRmaterial = new THREE.MeshPhongMaterial( { map: BirchPlankTexture, side: THREE.DoubleSide } );
const birchwallRplane = new THREE.Mesh( birchwallRgeometry, birchwallRmaterial );
birchwallRplane.position.set(0, 3, -7.5);
birchwallRplane.rotation.set(0, 0, 0);
scene.add( birchwallRplane );
//---------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------//
// BOOKS AND PUMKKINS //
const bookL1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookL1material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookL1cube = new THREE.Mesh( bookL1geometry, bookL1material );
bookL1cube.position.set(-7, -1, 7);
scene.add( bookL1cube );

const bookL2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookL2material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookL2cube = new THREE.Mesh( bookL2geometry, bookL2material );
bookL2cube.position.set(-7, -1, 6);
scene.add( bookL2cube );

const bookL3geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookL3material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookL3cube = new THREE.Mesh( bookL3geometry, bookL3material );
bookL3cube.position.set(-7, -1, 5);
scene.add( bookL3cube );

const bookL4geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookL4material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookL4cube = new THREE.Mesh( bookL4geometry, bookL4material );
bookL4cube.position.set(-7, -1, 4);
scene.add( bookL4cube );

const bookL5geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookL5material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookL5cube = new THREE.Mesh( bookL5geometry, bookL5material );
bookL5cube.position.set(-7, -1, 3);
scene.add( bookL5cube );

//-------------------------------------------------------------------------------//

const bookR1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookR1material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookR1cube = new THREE.Mesh( bookR1geometry, bookR1material );
bookR1cube.position.set(7, -1, -7);
scene.add( bookR1cube );

const bookR2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookR2material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookR2cube = new THREE.Mesh( bookR2geometry, bookR2material );
bookR2cube.position.set(6, -1, -7);
scene.add( bookR2cube );

const bookR3geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookR3material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookR3cube = new THREE.Mesh( bookR3geometry, bookR3material );
bookR3cube.position.set(5, -1, -7);
scene.add( bookR3cube );

const bookR4geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookR4material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookR4cube = new THREE.Mesh( bookR4geometry, bookR4material );
bookR4cube.position.set(4, -1, -7);
scene.add( bookR4cube );

const bookR5geometry = new THREE.BoxGeometry( 1, 1, 1 );
const bookR5material = new THREE.MeshPhongMaterial( { map: BookShelfTexture } );
const bookR5cube = new THREE.Mesh( bookR5geometry, bookR5material );
bookR5cube.position.set(3, -1, -7);
scene.add( bookR5cube );

//-------------------------------------------------------------------------------//

const pumpkinL1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const pumpkinL1material = new THREE.MeshBasicMaterial( { map: PumpkinTexture } );
const pumpkinL1cube = new THREE.Mesh( pumpkinL1geometry, pumpkinL1material );
pumpkinL1cube.position.set(-7, 0, 6);
scene.add( pumpkinL1cube );

const pumpkinL2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const pumpkinL2material = new THREE.MeshBasicMaterial( { map: PumpkinTexture } );
const pumpkinL2cube = new THREE.Mesh( pumpkinL2geometry, pumpkinL2material );
pumpkinL2cube.position.set(-7, 0, 4);
scene.add( pumpkinL2cube );

//-------------------------------------------------------------------------------//

const pumpkinR1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const pumpkinR1material = new THREE.MeshPhongMaterial( { map: PumpkinTexture } );
const pumpkinR1cube = new THREE.Mesh( pumpkinR1geometry, pumpkinR1material );
pumpkinR1cube.position.set(6, 0, -7);
scene.add( pumpkinR1cube );

const pumpkinR2geometry = new THREE.BoxGeometry( 1, 1, 1 );
const pumpkinR2material = new THREE.MeshPhongMaterial( { map: PumpkinTexture } );
const pumpkinR2cube = new THREE.Mesh( pumpkinR2geometry, pumpkinR2material );
pumpkinR2cube.position.set(4, 0, -7);
scene.add( pumpkinR2cube );


//----------------------------------------------------------------------------------------------------------//


// PAINTINGS //
const skullpainting1geometry = new THREE.PlaneGeometry( 5, 5 );
const skullpainting1material = new THREE.MeshPhongMaterial( { map: SkullPainting1Texture } );
const skullpainting1plane = new THREE.Mesh( skullpainting1geometry, skullpainting1material );
skullpainting1plane.position.set(-7.4, 3, 0);
skullpainting1plane.rotation.set(0, 1.57, 0);
scene.add( skullpainting1plane );

const skullpainting2geometry = new THREE.PlaneGeometry( 5, 5 );
const skullpainting2material = new THREE.MeshPhongMaterial( { map: SkullPainting2Texture } );
const skullpainting2plane = new THREE.Mesh( skullpainting2geometry, skullpainting2material );
skullpainting2plane.position.set(0, 3, -7.4);
skullpainting2plane.rotation.set(0, 0, 0);
scene.add( skullpainting2plane );



//---------------------------------------------------------------------------------------------------------------//



function animate( time ) {

    cameraControl.update();

    

endercrystalcube.rotation.x +=0.025
endercrystalcube.rotation.y +=0.025
endercrystalcube.rotation.z +=0.025

endcrystal1o1cube.rotation.x +=0.025
endcrystal1o1cube.rotation.y +=0.025

endcrystal1o2cube.rotation.x -=0.025
endcrystal1o2cube.rotation.y -=0.025

endcrystal2o1cube.rotation.x +=0.025
endcrystal2o1cube.rotation.y +=0.025

endcrystal2o2cube.rotation.x -=0.025
endcrystal2o2cube.rotation.y -=0.025


  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );