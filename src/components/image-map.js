import React from "react"

const ImageMap = () => (
  <div class="bg">
    <div class="bg__inner">
      <picture>
        <source media="(max-width: 640px)" srcset="./src/assets/images/roland-1@640w.png" />
        <source media="(max-width: 768px)" srcset="./src/assets/images/roland-1@768w.png" />
        <source media="(max-width: 1024px)" srcset="./src/assets/images/roland-1@1024w.png" />
        <img alt="" src="./src/assets/images/roland-1.png" />
      </picture>
    </div>
    <div class="bg__inner --active">
      <picture>
        <source media="(max-width: 640px)" srcset="./src/assets/images/roland-2@640w.png" />
        <source media="(max-width: 768px)" srcset="./src/assets/images/roland-2@768w.png" />
        <source media="(max-width: 1024px)" srcset="./src/assets/images/roland-2@1024w.png" />
        <img alt="" src="./src/assets/images/roland-2.png" />
      </picture>
    </div>
    <div class="bg__inner">
      <picture>
        <source media="(max-width: 640px)" srcset="./src/assets/images/roland-3@640w.png" />
        <source media="(max-width: 768px)" srcset="./src/assets/images/roland-3@768w.png" />
        <source media="(max-width: 1024px)" srcset="./src/assets/images/roland-3@1024w.png" />
        <img alt="" src="./src/assets/images/roland-3.png" />
      </picture>
    </div>
  </div>
)

export default ImageMap