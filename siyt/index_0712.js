import * as THREE from 'three';

//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js';

console.log(THREE.Scene); 

// 创建一个场景
const scene = new THREE.Scene();

// 创建一个几何体
const geomerty = new THREE.BoxGeometry(50, 50, 50);

// 创建材质
const material = new THREE.MeshBasicMaterial({
                              color:0x0000ff,
                              transparent:true,
                              opacity:0.5
                            });

// 创建一个物体
const mesh = new THREE.Mesh(geomerty, material);
// 设置物体在场景中的位置
mesh.position.set(0, 0, 0);

// 将物体添加到场景中
scene.add(mesh);

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(250);
scene.add(axesHelper);

// 创建相机
const camera = new THREE.PerspectiveCamera(30, 400/400, 0.1, 2000)

// 设置相机的位置
camera.position.set(200,200,200)
// 设置相机聚焦的位置
camera.lookAt(0,0,0)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
// 设置大小
renderer.setSize(400,400)

document.querySelector('#webgl').appendChild(renderer.domElement)

// 帧率监控
const stats = new Stats();
document.body.appendChild(stats.domElement);

// 渲染函数
function render() {
  stats.update();
  renderer.render(scene, camera); //执行渲染操作
  mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
  requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}
render();