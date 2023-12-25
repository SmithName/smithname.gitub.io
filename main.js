import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 10); // Adjust the camera position
camera.lookAt(new THREE.Vector3(0, 0, 0)); // Point the camera at the center of the scene

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.x = 5;

//Create a plane that receives shadows (but does not cast them)
const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
const planeMaterial = new THREE.MeshStandardMaterial({ color: "gray" });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
// Move the plane to the ground position
plane.rotation.x = -Math.PI / 2; // Rotate the plane to be horizontal
plane.position.y = -2; // Adjust the Y position to place it at the ground level
scene.add(plane);

const light = new THREE.AmbientLight("white"); // soft white light
scene.add(light);

const loader = new GLTFLoader();

loader.load(
  "public/models/glb format/border-pillar.glb",
  function (gltf) {
    // Access and position the second model's scene
    scene.add(gltf.scene);

    // Optionally, adjust position, rotation, or scale:
    gltf.scene.position.set(1, 2, 1);
    gltf.scene.rotation.set(2, 1, 2);
    gltf.scene.scale.set(2, 2, 2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader2 = new GLTFLoader();

loader2.load(
  "public/models/glb format/bench.glb",
  function (gltf) {
    // Access and position the second model's scene
    scene.add(gltf.scene);

    // Optionally, adjust position, rotation, or scale:
    gltf.scene.position.set(3, 1, 1);
    gltf.scene.rotation.set(0.5, 0.5, 0.4);
    gltf.scene.scale.set(2, 2, 2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Array of file paths to load
const filesToLoad = [
  "public/models/glb format/altar-stone.glb",
  "public/models/glb format/altar-wood.glb",
  "public/models/glb format/bench-damaged.glb",
  "public/models/glb format/bench.glb",
  "public/models/glb format/border-pillar.glb",
  "public/models/glb format/brick-wall-curve-small.glb",
  //   "public/models/glb format/brick-wall-curve.glb",
  //   "public/models/glb format/brick-wall-end.glb",
  //   "public/models/glb format/brick-wall.glb",
  //   "public/models/glb format/candle-multiple.glb",
  //   "public/models/glb format/candle.glb",
  "public/models/glb format/character-digger.glb",
  //   "public/models/glb format/character-ghost.glb",
  //   "public/models/glb format/character-skeleton.glb",
  //   "public/models/glb format/character-vampire.glb",
  //   "public/models/glb format/character-zombie.glb",
  //   "public/models/glb format/coffin-old.glb",
  //   "public/models/glb format/coffin.glb",
  //   "public/models/glb format/column-large.glb",
  //   "public/models/glb format/cross-column.glb",
  //   "public/models/glb format/cross-wood.glb",
  //   "public/models/glb format/cross.glb",
  //   "public/models/glb format/crypt-door.glb",
  //   "public/models/glb format/crypt-large-roof.glb",
  //   "public/models/glb format/crypt-large.glb",
  //   "public/models/glb format/crypt-small-entrance-alternative.glb",
  //   "public/models/glb format/crypt-small-entrance.glb",
  //   "public/models/glb format/crypt-small-roof.glb",
  "public/models/glb format/crypt-small.glb",
  "public/models/glb format/crypt.glb",
  //   "public/models/glb format/debris-wood.glb",
  //   "public/models/glb format/debris.glb",
  //   "public/models/glb format/detail-bowl.glb",
  //   "public/models/glb format/detail-chalice.glb",
  //   "public/models/glb format/detail-plate.glb",
  //   "public/models/glb format/fence-damaged.glb",
  //   "public/models/glb format/fence-gate.glb",
  //   "public/models/glb format/fence.glb",
  //   "public/models/glb format/fire-basket.glb",
  //   "public/models/glb format/grave-border.glb",
  "public/models/glb format/grave.glb",
  //   "public/models/glb format/gravestone-bevel.glb",
  //   "public/models/glb format/gravestone-broken.glb",
  //   "public/models/glb format/gravestone-cross-large.glb",
  //   "public/models/glb format/gravestone-cross.glb",
  //   "public/models/glb format/gravestone-debris.glb",
  //   "public/models/glb format/gravestone-decorative.glb",
  //   "public/models/glb format/gravestone-flat-open.glb",
  //   "public/models/glb format/gravestone-flat.glb",
  //   "public/models/glb format/gravestone-roof.glb",
  //   "public/models/glb format/gravestone-round.glb",
  //   "public/models/glb format/gravestone-wide.glb",
  //   "public/models/glb format/hay-bale-bundled.glb",
  "public/models/glb format/hay-bale.glb",
  "public/models/glb format/iron-fence-bar.glb",
  //   "public/models/glb format/iron-fence-border-column.glb",
  //   "public/models/glb format/iron-fence-border-curve.glb",
  //   "public/models/glb format/iron-fence-border-gate.glb",
  //   "public/models/glb format/iron-fence-border.glb",
  "public/models/glb format/iron-fence-curve.glb",
  "public/models/glb format/iron-fence-damaged.glb",
  "public/models/glb format/iron-fence.glb",
  "public/models/glb format/lantern-candle.glb",
  "public/models/glb format/lantern-glass.glb",
  "public/models/glb format/lightpost-all.glb",
  "public/models/glb format/lightpost-double.glb",
  "public/models/glb format/lightpost-single.glb",
  "public/models/glb format/pillar-large.glb",
  "public/models/glb format/pillar-obelisk.glb",
  "public/models/glb format/pillar-small.glb",
  "public/models/glb format/pillar-square.glb",
  //   "public/models/glb format/pine-crooked.glb",
  //   "public/models/glb format/pine-fall-crooked.glb",
  //   "public/models/glb format/pine-fall.glb",
  //   "public/models/glb format/pine.glb",
  //   "public/models/glb format/pumpkin-carved.glb",
  //   "public/models/glb format/pumpkin-tall-carved.glb",
  //   "public/models/glb format/pumpkin-tall.glb",
  //   "public/models/glb format/pumpkin.glb",
  //   "public/models/glb format/road.glb",
  //   "public/models/glb format/rocks-tall.glb",
  //   "public/models/glb format/rocks.glb",
  //   "public/models/glb format/shovel-dirt.glb",
  //   "public/models/glb format/shovel.glb",
  //   "public/models/glb format/stone-wall-column.glb",
  //   "public/models/glb format/stone-wall-curve.glb",
  //   "public/models/glb format/stone-wall-damaged.glb",
  //   "public/models/glb format/stone-wall.glb"
];

function loadModels() {
  const loader = new GLTFLoader();

  // Iterate through the array of file paths
  filesToLoad.forEach((filePath) => {
    loader.load(
      filePath,
      function (gltf) {
        // Access and position the loaded model's scene
        const model = gltf.scene;

        // Adjust position relative to the floor plane
        model.position.set(
          Math.random() * 10 - 5,
          -2, // Y position of the floor plane
          Math.random() * 10 - 5
        );

        model.scale.set(2, 2, 2);

        // Add the loaded model to the scene
        scene.add(model);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  });
}

// Call the function to load models
loadModels();
// Create Raycaster and mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Handle mouse click
window.addEventListener("click", onMouseClick, false);

function onMouseClick(event) {
  // Calculate mouse position in normalized device coordinates (NDC)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycast from the camera to the scene
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections with models
  const intersects = raycaster.intersectObjects(models, true);

  if (intersects.length > 0) {
    // Get the first intersected model
    const selectedModel = intersects[0].object;

    // Update OrbitControls target to the selected model's position
    controls.target.copy(selectedModel.position);
  }
}

// Create Orbital Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Keyboard controls
const moveSpeed = 5;

const keyState = {};
window.addEventListener("keydown", (event) => {
  keyState[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  keyState[event.key] = false;
});

function handleKeyboardInput() {
  const moveVector = new THREE.Vector3();

  if (keyState["w"]) moveVector.z = -1;
  if (keyState["s"]) moveVector.z = 1;

  // Move the camera in the direction it is facing
  const rotationMatrix = new THREE.Matrix4();
  rotationMatrix.extractRotation(camera.matrix);

  moveVector.applyMatrix4(rotationMatrix);

  camera.position.add(moveVector.multiplyScalar(moveSpeed * 0.1));
}
// Create XYZ ruler
const rulerLength = 10;

const xAxis = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(rulerLength, 0, 0),
  ]),
  new THREE.LineBasicMaterial({ color: 0xff0000 })
);
scene.add(xAxis);

const yAxis = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, rulerLength, 0),
  ]),
  new THREE.LineBasicMaterial({ color: 0x00ff00 })
);
scene.add(yAxis);

const zAxis = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, rulerLength),
  ]),
  new THREE.LineBasicMaterial({ color: 0x0000ff })
);
scene.add(zAxis);

function animate() {
  requestAnimationFrame(animate);

  // Handle keyboard input
  handleKeyboardInput();

  // Update Orbital Controls
  controls.update();

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // camera.rotation.x += 0.01;
  // 	camera.rotation.y += 0.01;
  // 		camera.rotation.z += 0.01;

  renderer.render(scene, camera);
}

camera.position.set(0, 10, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));

animate();
