export class GameEasy {

	constructor( name = "GameEasy Game", admins = [], defaultMessage = "Welcome to the game!" ) {
        
		this.Name = name;
		this.Admins = admins;
		this.DefaultMessage = defaultMessage;
        this.World = World;
        this.Bricks = World.Bricks;

	}
    UUID (){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
	getBrick( brickName ) {

		if ( ! brickName ) throw new Error( "No brick name specificed." );

         return this.Bricks.find(element => element.name = brickName);


	}
    
	newBrick( position, scale, color, name ) {
        if ( ! name ) {

            name = `${this.Name}_${UUID()}`;
            console.warn(`${this.Name} | WARNING: You have not added a name to the brick, the name will be defaulted to ${name}`)
        
        }

		if ( ! position ) {

			console.warn( `${this.Name} | WARNING: You have not added a position to the brick, deafulting to 0,0,0` );
			position = new Vector3( 0, 0, 0 );

		}

		if ( ! scale ) {

            console.warn( `${this.Name} | WARNING: You have not added a scale to the brick, deafulting to 0,0,0` );
			scale = new Vector3( 0, 0, 0 );

		}

        if ( ! color ){

            console.warn( `${this.Name} | WARNING: You have not added a color to the brick, deafulting to black` );
			color = "#000000"

        }

        let Brick =  new Brick(position, scale, color);
        Brick.name = name;
        return Brick;

	}

}

new GameEasy("Lol", ["Jordan", "james"], "Welcome to my gaem");