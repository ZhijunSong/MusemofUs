class SoundNode{
    constructor(sound_id, rel_pos, desc, x, y){
        this.sound_id = sound_id;
        this.rel_pos = rel_pos;
        this.height = 50;
        this.desc = desc;
        this.active = false;
        this.playing = false;
        this.x = x;
        this.y = y;
        this.d = 50;
        this.d2 = 100;
        this.color = color(255, 214, 108)
    }

    display(){
        if(!this.active){
            stroke(this.color, 100);
            strokeWeight(5);
            fill(this.color, 100);
            circle(this.x, this.y, this.d);
            noFill();
            circle(this.x, this.y, this.d2);
        }else{
            stroke(this.color);
            strokeWeight(5);
            fill(this.color);
            circle(this.x, this.y, this.d2);
        }
    }

    checkClick(){
        let d = dist(this.x, this.y, mouseX, mouseY);
            if(d <= this.d2){
                return true;
            }
        
    }

    play(){
        if(this.active){
            let m = map(mouseX, this.x, width, 0, this.sound_id.duration())
            let pos = map(this.sound_id.currentTime(), 0, this.sound_id.duration(), this.x, width)
            strokeWeight(5);
            stroke(200);
            line(this.x, this.y, width, this.y);
            stroke(255);
            line(this.x, this.y, pos, this.y);

            if(mouseX < width && mouseX > this.x && mouseY < this.y + 20 && mouseY > this.y - 20){
                circle(mouseX, this.y, 20);
                if(mouseIsPressed){
                    this.sound_id.jump(m, this.sound_id.duration)
                }
            }
            
        }
    }
  
    //for switch
    stop(){
      this.active = false
      this.sound_id.stop();
    }

  


}