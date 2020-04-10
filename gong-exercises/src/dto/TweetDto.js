export class TweetDto {
    constructor(id, text, like = false) {
        this.id = id;
        this.text = text.replace(/\r?\n/g, '<br />');
        this.like = like;
    }

    likeOrUnlikeTweet(){
        this.like = !this.like;
    }
}