export class TweetDto {
    constructor(id, text, like = false) {
        this.id = id;
        this.text = text;
        this.like = like;
    }

    static fromJson(json) {
        return new TweetDto(json.id, json.text, json.like);
    }

    likeOrUnlikeTweet(){
        this.like = !this.like;
    }
}