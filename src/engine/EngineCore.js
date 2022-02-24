//engine
/**
 * assets (image, audio)
 * rooms[]
 * objects[]
 */

//room
/**
 * objects[]
 * backgrounds[] (image)
 * height, width
 * camera
 */

//object
/**
 * sprites[] (image)
 * x, y, rotation, scale
 * Actions ->
 *  - Start
 *  - Update
 *  - Draw
 * Callbacks ->
 *  - OnClick
 *  - OnCollision
 */

//image
/**
 * url
 * width, hegith
 */

//camera
/**
 * x, y
 * width, height
 * zoom
 */

export class EngineCore {
  constructor() {
    this.Pixi = null;
    this.rooms = [];
    this.objects = [];
    this.images = [];
    this.sounds = [];
    this.currentRoom = 0; //the initial or selected room
  }

  //assets
  Run = (assetsList, p5) => {
    /**
     * asset = {
     *   name : string,
     *   path: string
     * }
     */

    this.Start();
  };

  //core
  Start = (p5) => {
    this.rooms[this.currentRoom]?.initRoom();
  };

  Update = (p5) => {
    this.rooms[this.currentRoom]?.updateRoom();

    p5.background(0);
    p5.ellipse(10, 10, 70, 70);
  };

  //utility
  Instantiate = (object) => {
    this.rooms[this.currentRoom].objects.push(object);
  };

  Destroy = (object) => {
    this.rooms[this.currentRoom].objects.splice(
      this.rooms[this.currentRoom].objects.indexOf(object),
      1
    );

    //this uses more memory than the above method
    // let newList = this.rooms[this.currentRoom].objects.filter(obj => obj !== object);
    // this.rooms[this.currentRoom].objects = newList;
  };
}

export class GameObject {
  constructor() {
    this.sprites = [];
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scale = 1;
  }

  Start = () => {};
  Update = () => {};
  OnClick = () => {};
  OnCollision = () => {};
}

export class Room {
  constructor(config) {
    this.objects = [];
    this.width = config.width;
    this.height = config.height;
    this.camera = null;
  }

  initRoom = () => {
    this.objects.forEach((object) => {
      object.Start();
    });
  };

  updateRoom = (deltaTime) => {
    this.objects.forEach((object) => {
      object.Update(deltaTime);
    });
  };
}
