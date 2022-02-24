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
import Game from "../Game/Game";

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
  Run = (p5) => {
    /**
     * asset = {
     *   name : string,
     *   path: string
     * }
     */
    this.images = [];
    Game.Assets.forEach((asset, index) => {
      p5.loadImage(
        asset.path,
        (img) => {
          console.log(
            "Loading " + Number(index + 1) + " of " + Game.Assets.length
          );
          this.images.push(img);

          if (index == Game.Assets.length - 1) {
            console.log("All loaded");
            this.Start();
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  };

  //core
  Start = (p5) => {
    Game.Setup(this);
    this.rooms[this.currentRoom]?.initRoom();
  };

  Update = (p5) => {
    this.rooms[this.currentRoom]?.updateRoom();

    p5.background(255);
  };

  //rooms
  CreateRoom = (roomName, w, h) => {
    let newRoom = new Room({ name: roomName, width: w, height: h });
    this.rooms.push(newRoom);
    return newRoom;
  };

  FindRoom = (roomName) => {
    let room = this.rooms.find((room) => room.name == roomName);
    return room;
  };

  SetCurrentRoom = (roomName) => {
    this.currentRoom = this.rooms.findIndex((room) => room.name == roomName);
    if (this.currentRoom == -1) {
      console.log("Room not found");
    } else {
      this.rooms[this.currentRoom]?.initRoom();
      return this.rooms[this.currentRoom];
    }
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
    this.name = config.name;
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
