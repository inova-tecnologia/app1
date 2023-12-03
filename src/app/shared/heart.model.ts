export class Heart { 
    constructor(
        public full: boolean,
        public urlFullHeart: string = '../assets/fullHeart.png',
        public urlEmptyHeart: string = '../assets/emptyHeart.png') {
    }  

    public showHeart(): string {
        if(this.full){ 
            return this.urlFullHeart;
        }else{
            return this.urlEmptyHeart;
        }
    }
}

