// cvpr-demos.js — demos shown on the CVPR 2026 landing page.

export const cvprDemos = [
  {
    id: 'cvpr-d1',
    url: 'https://mlpc-ucsd.github.io/PixARMesh/',
    screenshot: '/demos/pixarmesh-thumb.webp',
    title: 'PixARMesh: Autoregressive Mesh-Native Single-View Scene Reconstruction',
    description: 'Autoregressively reconstructs complete 3D indoor scene meshes directly from a single RGB image.',
    tags: ['Vision'],
  },
  {
    id: 'cvpr-d2',
    url: 'https://3d-belief.github.io/',
    screenshot: '/demos/3d-belief.png',
    title: '3D-Belief: Embodied Belief Inference via Generative 3D World Modeling',
    description: 'A generative 3D world model that maintains and updates an agent\'s beliefs about partially observed environments as new observations arrive.',
    tags: ['Embodied AI'],
  },
  {
    id: 'cvpr-d3',
    url: 'https://stereopolicy.github.io/',
    screenshot: '/demos/stereopolicy.jpg',
    title: 'StereoPolicy: Improving Robotic Manipulation Policies via Stereo Perception',
    description: 'A visuomotor policy learning framework that leverages stereo image pairs to strengthen geometric reasoning for robotic manipulation, without requiring explicit 3D reconstruction.',
    tags: ['Embodied AI'],
  },
  {
    id: 'cvpr-d4',
    url: 'https://chen-si-02-anyhand-demo.hf.space/',
    screenshot: '/demos/anyhand.png',
    title: 'AnyHand: A Large-Scale Synthetic Dataset for RGB(-D) Hand Pose Estimation',
    description: 'A large-scale synthetic dataset of 6.6M RGB-D images with diverse hand shapes, objects, and rich geometric annotations for 3D hand pose estimation.',
    tags: ['Vision'],
  },
]
