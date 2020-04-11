export class TweetDto {
    constructor(id, text, like = false) {
        this.id = id;
        this.text = text;
        this.like = like;
    }

    likeOrUnlikeTweet(){
        this.like = !this.like;
    }
}